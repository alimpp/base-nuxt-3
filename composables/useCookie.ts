interface CookieOptions {
  expires?: number; // in days
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Lax' | 'Strict' | 'None';
}

const DEFAULT_PATH = '/';
const DEFAULT_SAME_SITE = 'Lax';

export const useCookie = () => {
  const setCookie = (
    name: string,
    value: string,
    options: CookieOptions = {}
  ): void => {
    const encodedName = encodeURIComponent(name);
    const encodedValue = encodeURIComponent(value);
    
    let cookieString = `${encodedName}=${encodedValue}`;

    if (options.expires) {
      const expiresDate = new Date();
      expiresDate.setTime(expiresDate.getTime() + options.expires * 86400000); // 24 * 60 * 60 * 1000
      cookieString += `; expires=${expiresDate.toUTCString()}`;
    }

    cookieString += `; path=${options.path || DEFAULT_PATH}`;

    if (options.domain) {
      cookieString += `; domain=${options.domain}`;
    }

    cookieString += `; secure=${options.secure ?? true}`;

    cookieString += `; samesite=${options.sameSite || DEFAULT_SAME_SITE}`;

    document.cookie = cookieString;
  };

  const getCookie = (name: string): string | null => {
    const nameEQ = `${encodeURIComponent(name)}=`;
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
      const trimmedCookie = cookie.trim();
      if (trimmedCookie.startsWith(nameEQ)) {
        return decodeURIComponent(trimmedCookie.substring(nameEQ.length));
      }
    }

    return null;
  };

  const deleteCookie = (
    name: string,
    options: Omit<CookieOptions, 'expires'> = {}
  ): void => {
    setCookie(name, '', { ...options, expires: -1 });
  };

  return {
    setCookie,
    getCookie,
    deleteCookie,
  };
}
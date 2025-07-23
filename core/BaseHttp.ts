import { BaseModel } from "./BaseModel";

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

export class BaseHttp extends BaseModel<any> {
  private async request<T>(
    url: string,
    method: HttpMethod,
    body?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    const api = useCustomFetch();
    try {
      console.log(url);

      const response = await api(url, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
      return response as T;
    } catch (error) {
      console.error(`HTTP ${method} request to ${url} failed:`, error);
      throw error;
    }
  }

  public async Get<T>(url: string): Promise<T> {
    return this.request<T>(url, "GET");
  }

  public async Post<T>(url: string, body: any): Promise<T> {
    return this.request<T>(url, "POST", body);
  }

  public async Patch<T>(url: string, body: any): Promise<T> {
    return this.request<T>(url, "PATCH", body);
  }

  public async Put<T>(url: string, body: any): Promise<T> {
    return this.request<T>(url, "PUT", body);
  }

  public async Delete<T>(url: string): Promise<T> {
    return this.request<T>(url, "DELETE");
  }

  public async Upload<T>(url: string, body: FormData): Promise<T> {
    const api = useCustomFetch();
    try {
      const response = await api(url, {
        method: "POST",
        body,
      });
      return response as T;
    } catch (error) {
      console.error(`File upload to ${url} failed:`, error);
      throw error;
    }
  }
}

export class BaseHttp {
  
  public async Get(url: string){
    const token = useCookie("token");
    try {
        const requestResponse = await $fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        return requestResponse
    } catch (error) {
        throw error;
    }
  }
 
}

export const baseHttp = new BaseHttp() 
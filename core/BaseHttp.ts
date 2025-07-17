import { BaseModel } from "~/model/Base";

export class BaseHttp extends BaseModel<any> {
  public async Get(url: string) {
    const api = useCustomFetch();
    try {
      const response = await api(url);
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async Post(url: string, body: any) {
    const api = useCustomFetch();
    try {
      const response = await api(url, {
        method: "POST",
        body,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async Patch(url: string, body: any) {
    const api = useCustomFetch();
    try {
      const response = await api(url, {
        method: "PATCH",
        body,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async Delete(url: string) {
    const api = useCustomFetch();
    try {
      const response = await api(url, {
        method: "DELETE",
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

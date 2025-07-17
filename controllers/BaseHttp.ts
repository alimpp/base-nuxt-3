export class BaseHttp {
  public async Get(url: string) {
    const api = useCustomFetch();
    try {
      const response = await api(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export const baseHttp = new BaseHttp();

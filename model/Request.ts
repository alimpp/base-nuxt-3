import { BaseHttp } from "../core/BaseHttp";

import type { IServerResponse, IRequestList } from "../types/Request";

export class RequestDataModel extends BaseHttp {

  constructor() {
    super("request");
  }

  async generateRequestList(apiResponse: IServerResponse): Promise<IRequestList[]> {
    if (!Array.isArray(apiResponse)) {
      throw new Error("Invalid users data format");
    }
    let list = []
    for (let req of apiResponse) {
        const user = await useUserGenerator(req.from)
        const obj = {
            requestId: req.id,
            userId: req.from.id,
            ...user,
        }
        list.push(obj)
    }
    return list
  }

}

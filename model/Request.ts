import { BaseApp } from "../core/BaseApp";

import type { IServerResponse, IRequestList } from "../types/Request";

export class RequestDataModel extends BaseApp<any> {
  constructor() {
    super("requests");
  }

  async requestListParsed(
    apiResponse: IServerResponse
  ): Promise<IRequestList[]> {
    if (!Array.isArray(apiResponse)) {
      throw new Error("Invalid list data format");
    }
    let list = [];
    for (let req of apiResponse) {
      const user = await useUserGenerator(req.from);
      const obj = {
        requestId: req.id,
        userId: req.from.id,
        ...user,
      };
      list.push(obj);
    }
    this.saveAllItems(list);
    return list;
  }
}

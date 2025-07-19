import { RequestDataModel } from "~/model/Request";

import type { IServerResponse, IRequestList } from "../types/Request";

const requestStore = useRequestStore()

export class RequestController extends RequestDataModel {

  constructor() {
      super()
  }

  public getCacheData() {
    const list = this.getAllItems();
    if (list) {
      requestStore.setRequestList(list)
    }
  }
    
  public async getRequestList() {
    this.getCacheData()
    const requestResponse = await this.Get('/api/request/list') as IServerResponse
    const parsedList: IRequestList[] = await this.generateRequestList(requestResponse)
    requestStore.setRequestList(parsedList)
  }

}
 
export const requestController = new RequestController()
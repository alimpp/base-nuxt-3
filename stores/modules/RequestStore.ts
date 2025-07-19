import { BaseStore } from "../../core/BaseStore";
import { StoreManager } from "../../core/StoreManager";

import type { IRequestList } from "@/types/Request";

interface IRequestListState {
  requestList: IRequestList[];
}

export class RequestStore extends BaseStore<IRequestListState> {
  private static _instance: RequestStore;

  public static getInstance(): RequestStore {
    if (!RequestStore._instance) {
      RequestStore._instance = new RequestStore();
    }
    return RequestStore._instance;
  }

  private constructor() {
    super("request", {
      requestList: [],
    });

    StoreManager.register(this);
  }

  setRequestList(list: IRequestList[]) {
    this._state.requestList = list;
  }

  get getRequestList(): IRequestList[] {
    return this._state.requestList;
  }

  public reset() {
    this._state.requestList = [];
  }
}

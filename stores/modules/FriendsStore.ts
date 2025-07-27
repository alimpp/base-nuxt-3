import { BaseStore } from "../../core/BaseStore";
import { StoreManager } from "../../core/StoreManager";

import type { IFriendList } from "@/types/Friends";

interface IFriendsListState {
  list: IFriendList[];
  moduleState: string
}

export class FriendsStore extends BaseStore<IFriendsListState> {
  private static _instance: FriendsStore;

  public static getInstance(): FriendsStore {
    if (!FriendsStore._instance) {
      FriendsStore._instance = new FriendsStore();
    }
    return FriendsStore._instance;
  }

  private constructor() {
    super("friends", {
      list: [],
      moduleState: ""
    });

    StoreManager.register(this);
  }

  setList(list: IFriendList[]) {
    this._state.list = list;
  }
  
  get getModuleState(): string {
    return this._state.moduleState
  }

  public setModuleState(moduleState: string) {
    this._state.moduleState = moduleState
  }

  get getList(): IFriendList[] {
    return this._state.list;
  }

  public reset() {
    this._state.list = [];
    this._state.moduleState = ''
  }
}

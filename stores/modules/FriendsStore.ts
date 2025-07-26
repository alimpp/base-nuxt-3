import { BaseStore } from "../../core/BaseStore";
import { StoreManager } from "../../core/StoreManager";

import type { IFriendList } from "@/types/Friends";

interface IFriendsListState {
  friendList: IFriendList[];
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
      friendList: [],
      moduleState: ""
    });

    StoreManager.register(this);
  }

  setFriendsList(list: IFriendList[]) {
    this._state.friendList = list;
  }

  get getFriendsList(): IFriendList[] {
    return this._state.friendList;
  }

  public reset() {
    this._state.friendList = [];
    this._state.moduleState = ''
  }
}

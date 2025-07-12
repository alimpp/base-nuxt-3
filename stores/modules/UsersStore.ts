import { BaseStore } from "../core/BaseStore";
import { StoreManager } from "../core/StoreManager";

import type { IUserList } from '@/types/Users'


interface IUsersState {
  users: IUserList[]
}

export class UsersStore extends BaseStore<IUsersState> {
  private static _instance: UsersStore;

  public static getInstance(): UsersStore {
    if (!UsersStore._instance) {
      UsersStore._instance = new UsersStore();
    }
    return UsersStore._instance;
  }

  private constructor() {
    super("users", {
      users: [],
    });

    StoreManager.register(this);
  }

  setUsers(users: IUserList[]) {
    this._state.users = users
  }

  get users(): IUserList[] {
    return this._state.users;
  }

  public reset() {
    this._state.users = [];
  }
}

import { BaseStore } from "../core/BaseStore";
import { StoreManager } from "../core/StoreManager";

interface IUsersState {
  users: Array<{
    id: string;
    name: string;
    username: string,
    email: string
  }>;
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
    super("user", {
      users: [],
    });

    StoreManager.register(this);
  }

  setUsers(users: IUsersState['users']) {
    this._state.users = users
  }

  get users(): IUsersState['users'] {
    return this._state.users;
  }

  public reset() {
    this._state.users = [];
  }
}

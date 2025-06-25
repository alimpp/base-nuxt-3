import { BaseStore } from "../core/BaseStore";
import { StoreManager } from "../core/StoreManager";

interface IUserState {
  currentUser: null | {
    id: string;
    name: string;
    email: string;
  };
  users: Array<{
    id: string;
    name: string;
  }>;
  loading: boolean;
}

export class UserStore extends BaseStore<IUserState> {
  private static _instance: UserStore;

  public static getInstance(): UserStore {
    if (!UserStore._instance) {
      UserStore._instance = new UserStore();
    }
    return UserStore._instance;
  }

  private constructor() {
    super("user", {
      currentUser: null,
      users: [],
      loading: false,
    });

    StoreManager.register(this);
  }

  public get isAuthenticated() {
    return this.createGetter((state) => state.currentUser !== null);
  }

  public get userList() {
    return this.createGetter((state) => state.users);
  }

  public async fetchUsers() {
    this._state.loading = true;
    console.log("fetchUsers action calling");
    this.setCurrentUser({
      id: "123456789",
      name: "jhon doe",
      email: "jhon@gmail.com",
    });
  }

  public setCurrentUser(user: IUserState["currentUser"]) {
    this._state.currentUser = user;
  }

  public reset() {
    this._state.currentUser = null;
    this._state.users = [];
    this._state.loading = false;
  }
}

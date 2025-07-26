import { BaseStore } from "../../core/BaseStore";
import { StoreManager } from "../../core/StoreManager";
import type { IUser } from "@/types/User";

interface IUserState {
  user: IUser;
  jwtToken: string;
  isAuthenticated: boolean;
  moduleState: string
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
      user: {
        id: 0,
        fristname: "",
        lastname: "",
        email: "",
        avatarUrl: "",
        bio: "",
        fullname: "",
        fristChar: "",
      },
      jwtToken: "",
      isAuthenticated: false,
      moduleState: ''
    });

    StoreManager.register(this);
  }

  get getModuleState(): string {
    return this._state.moduleState
  }

  public setModuleState(moduleState: string) {
    this._state.moduleState = moduleState
  }

  setJwt(jwt: string) {
    this._state.jwtToken = jwt;
  }

  getUser() {
    return this._state.user
  }

  setUser(user: IUser) {
    this._state.user = user;
  }

  setAuthenticated(flag: boolean) {
    this._state.isAuthenticated = flag;
  }

  public reset() {
    (this._state.user = {
      id: 0,
      fristname: "",
      lastname: "",
      email: "",
      avatarUrl: "",
      bio: "",
      fullname: "",
      fristChar: "",
    }),
      (this._state.jwtToken = "");
    this._state.isAuthenticated = false;
    this._state.moduleState = ''
  }
}

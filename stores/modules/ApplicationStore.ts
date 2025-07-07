import { BaseStore } from "../core/BaseStore";
import { StoreManager } from "../core/StoreManager";

interface IApplication {
  loader: boolean,
  animation: string
}

export class ApplicationStore extends BaseStore<IApplication> {
  private static _instance: ApplicationStore;

  public static getInstance(): ApplicationStore {
    if (!ApplicationStore._instance) {
      ApplicationStore._instance = new ApplicationStore();
    }
    return ApplicationStore._instance;
  }

  private constructor() {
    super("application", {
      loader: false,
      animation: ""
    });
    StoreManager.register(this);
  }

  public reset() {
    this._state.loader = false;
    this._state.animation = ""
  }
}

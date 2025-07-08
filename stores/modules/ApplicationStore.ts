import { BaseStore } from "../core/BaseStore";
import { StoreManager } from "../core/StoreManager";

interface IApplication {
  loader: boolean,
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
    });
    StoreManager.register(this);
  }

  setLoader(path: string) {
    this._state.loader = true
    setTimeout(() => {
       navigateTo(path)
    }, 900);
    setTimeout(() => {
      this._state.loader = false
    }, 2000);
  }

  public reset() {
    this._state.loader = false;
  }
}

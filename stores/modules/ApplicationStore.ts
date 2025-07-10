import { BaseStore } from "../core/BaseStore";
import { StoreManager } from "../core/StoreManager";

interface IToast {
  title: string;
  text: string;
  type: string;
  id: string | number;
  timeout: number
}

interface IAlert {
  title: string;
  text: string;
  type: string;
  id: string | number;
  timeout: number
}

interface IApplication {
  theme: string,
  toastMessages: Array<IToast>
  alert: IAlert
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
      theme: "dark",
      toastMessages: [],
      alert: {
        title: '',
        text: '',
        type: '',
        id: '',
        timeout: 0
      }
    });
    StoreManager.register(this);
  }

  setTheme(theme: string) {
     this._state.theme = theme
  }

  public reset() {
    this._state.theme = "dark";
    this._state.toastMessages = []
    this._state. alert = {
        title: '',
        text: '',
        type: '',
        id: '',
        timeout: 0
    }
  }
}

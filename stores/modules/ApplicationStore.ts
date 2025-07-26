import { BaseStore } from "../../core/BaseStore";
import { StoreManager } from "../../core/StoreManager";

interface IToast {
  title: string;
  text: string;
  type: string;
  id: string | number;
  timeout: number;
}

interface IAlert {
  title: string;
  text: string;
  type: string;
  id: string | number;
  timeout: number;
}

interface IApplication {
  theme: string;
  toastMessages: Array<IToast>;
  alert: IAlert;
  compose: boolean;
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
        title: "",
        text: "",
        type: "",
        id: "",
        timeout: 0,
      },
      compose: false
    });
    StoreManager.register(this);
  }

  setTheme(theme: string) {
    this._state.theme = theme;
  }

  public setAlert(type: string, title: string, text: string, timeout: number) {
    this._state.alert = {
      title: title,
      text: text,
      type: type,
      id: this.generateId(),
      timeout: timeout,
    };
  }

  public resetAlert() {
    this._state.alert = {
      title: "",
      text: "",
      type: "",
      id: "",
      timeout: 0,
    };
  }

  public setCompose(state?: boolean) {
    state ? this._state.compose = state : this._state.compose = !this._state.compose
  }

  get getComposeState(): boolean {
    return this._state.compose
  }

  public reset() {
    this._state.theme = "dark";
    this._state.toastMessages = [];
    this._state.alert = {
      title: "",
      text: "",
      type: "",
      id: "",
      timeout: 0,
    };
    this._state.compose = false
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}

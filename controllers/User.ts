import { UserDataModel } from "~/model/User";

import type { ILoginForm, IRegisterForm } from "@/types/User";

const userStore = useUserStore();
const applicationStore = useApplicationStore();

interface IUpdateProfile {
  fristname: string;
  lastname: string;
  bio: string;
  avatarUrl?: string;
}

export class UserController extends UserDataModel {
  constructor() {
    super();
  }

  public async login(loginForm: ILoginForm) {
    await this.Post("/api/auth/login", loginForm)
      .then((res: unknown) => {
        const response = res as { token: string };
        const tokenCookie = useCookie("token", { maxAge: 60 * 60 * 24 });
        tokenCookie.value = response.token;
        navigateTo("/");
      })
      .catch((err) => {
        if (err.data.data.statusCode == 401) {
          applicationStore.setAlert(
            "danger",
            err.data.data.message,
            err.data.data.error,
            5000
          );
        }
      });
  }

  public async register(registerForm: ILoginForm) {
    const response = await this.Post("/api/auth/register", registerForm)
    if (response) {
      navigateTo("/auth/login");
    }
  }

  public async profile(): Promise<void> {
    const token = useCookie("token");
    userStore.setJwt(token.value ? token.value : "");
    const cacheUser = this.readObject();        
    if (cacheUser) {
      userStore.setUser(cacheUser);
    }
    const requestResponse = await this.Get("/api/users/profile");
    if (requestResponse) userStore.setAuthenticated(true);
    const user = await this.generateProfile(requestResponse);
    userStore.setUser(user);
  }

  public async updateAvatar(avatarUrl: string) {
    this.Patch("/api/users/update", { avatarUrl });
  }

  async updateProfile(body: IUpdateProfile) {
    this.Patch("/api/users/update", body);
  }

  public logout() {
    const token = useCookie("token");
    token.value = ''
    this.clearStorage()
    navigateTo('/auth/login')
  }
}

export const userController = new UserController();

import { UserDataModel } from "~/model/User";

import type { ILoginForm } from "@/types/User";

import { baseHttp } from "./BaseHttp";

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
    await $fetch("/api/auth/login", {
      method: "POST",
      body: loginForm,
    })
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

  public async profile(): Promise<void> {
    const token = useCookie("token");
    userStore.setJwt(token.value ? token.value : "");
    const cacheUser = this.readByStorageKey("user");
    if (cacheUser) {
      userStore.setUser(cacheUser);
    }
    const requestResponse = await baseHttp.Get("/api/users/profile");
    if (requestResponse) userStore.setAuthenticated(true);
    const user = await this.generateProfile(requestResponse);
    userStore.setUser(user);
  }

  public async updateAvatar(avatarUrl: string) {
    const token = useCookie("token");
    await $fetch("/api/users/update", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      body: { avatarUrl: avatarUrl },
    });
  }

  async updateProfile(body: IUpdateProfile) {
    const token = useCookie("token");
    await $fetch("/api/users/update", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      body: body,
    });
  }
}

export const userController = new UserController();

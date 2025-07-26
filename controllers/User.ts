import { UserDataModel } from "~/model/User";

import type { ILoginForm, IRegisterForm } from "@/types/User";
const { success } = useToast()
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

  private userStore = useUserStore();
  private applicationStore = useApplicationStore();

  private getCacheData() {
    const cacheUser = this.readObject();
    if (cacheUser) {
      this.userStore.setUser(cacheUser);
    }
  }

  public async login(loginForm: ILoginForm) {
    await this.Post("/api/auth/login", loginForm)
      .then((res: unknown) => {
        const response = res as { token: string };
        const tokenCookie = useCookie("token", { maxAge: 60 * 60 * 24 });
        tokenCookie.value = response.token;
        success('Authenticated Success')
        navigateTo("/");
      })
      .catch((err) => {
        if (err.data.data.statusCode == 401) {
          this.applicationStore.setAlert(
            "danger",
            err.data.data.message,
            err.data.data.error,
            5000
          );
        }
      });
  }

  public async register(registerForm: IRegisterForm) {
    const response = await this.Post("/api/auth/register", registerForm);
    if (response) {
      success('New Profile Created')
      navigateTo("/auth/login");
    }
  }

  public async profile(): Promise<void> {
    this.getCacheData();
    const token = useCookie("token");
    this.userStore.setJwt(token.value ? token.value : "");
    const requestResponse = await this.Get("/api/users/profile");
    if (requestResponse) this.userStore.setAuthenticated(true);
    const user = await this.profileParsed(requestResponse);
    this.userStore.setUser(user);
  }

  public async updateAvatar(avatarUrl: string) {
    this.Patch("/api/users/update", { avatarUrl }).then(()=> {success('Set New Avatar')})
  }

  async updateProfile(body: IUpdateProfile) {
    this.Patch("/api/users/update", body).then(()=> {
      success('Profile Updated')
      this.profile()
    })
  }

  public logout() {
    const token = useCookie("token");
    token.value = "";
    this.clearStorage();
    navigateTo("/auth/login");
  }
}

export const userController = new UserController();

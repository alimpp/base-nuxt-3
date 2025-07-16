import { UserDataModel } from '~/model/User'

import type { ILoginForm } from '@/types/User'

import { baseHttp } from './BaseHttp'

const userStore = useUserStore()
const applicationStore = useApplicationStore()

interface IUpdateProfile {
  fristname: string;
  lastname: string;
  bio: string;
  avatarUrl?: string;
}


export class UserController extends UserDataModel {

  constructor() {
      super()
  }

  public async login(loginForm: ILoginForm) {
    await $fetch("/api/auth/login", {
      method: "POST",
      body: loginForm,
    })
      .then((res: unknown) => {
        const response = res as { token: string };
        const tokenCookie = useCookie('token', { maxAge: 60 * 60 * 24 });
        tokenCookie.value = response.token;
        navigateTo("/");
      })
      .catch((err) => {
        if (err.data.data.statusCode == 401) {
          applicationStore.setAlert('danger', err.data.data.message, err.data.data.error ,5000)
        }
      });

  }

  public async profile(): Promise<void> {
    const token = useCookie('token');        
    userStore.setJwt(token.value ? token.value : '')
    const user = this.readByStorageKey('user')
    if(user) {
      userStore.setUser(user)
    }
    await $fetch("/api/users/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    })
    .then( async (response: any) => {
      if (response) userStore.setAuthenticated(true);
      const user = await this.generateProfile(response)
      userStore.setUser(user)
    })
    .catch((err) => {
      applicationStore.setAlert('danger', 'Profile Request failed !', 'Network is low' ,5000)
    });
  }

  public async updateAvatar(avatarUrl: string) {
    const token = useCookie("token");
    await $fetch("/api/users/update", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      body: {avatarUrl: avatarUrl},
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

export const userController = new UserController()

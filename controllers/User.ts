import { UserDataModel } from '~/model/User'
// import { useCookie } from "~/utils/useCookie";

import type { IUser, ILoginForm } from '@/types/User'

const userStore = useUserStore()
const applicationStore = useApplicationStore()


export class UserController extends UserDataModel {

  constructor() {
      super()
  }

  async login(loginForm: ILoginForm) {
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

  async profile() {
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
    .then((response: any) => {
      if (response) userStore.setAuthenticated(true);
      const user = this.generateProfile(response)
      userStore.setUser(user)
    })
    .catch((err) => {
      applicationStore.setAlert('danger', 'Profile Request failed !', 'Network is low' ,5000)
    });
  }

}

export const userController = new UserController()
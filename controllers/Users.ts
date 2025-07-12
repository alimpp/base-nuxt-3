import { UsersDataModel } from '~/model/Users'

import type { IUsersServerResponse, IUserList } from '../types/Users'

const usersStore = useUsersStore()

interface User {
  id: string;
  name: string;
  username: string,
  email: string
}

export class UsersController extends UsersDataModel {

    constructor() {
        super()
    }

  async allUsers(): Promise<void> {
    const token = useCookie('token')
    try {
      const requestResponse: IUsersServerResponse = await $fetch('/api/users/all',{
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      const parsedList: IUserList[] = this.generateUsers(requestResponse)
      usersStore.setUsers(parsedList)
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw error;
    }
  }

}

export const usersController = new UsersController()
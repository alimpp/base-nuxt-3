import { UsersDataModel } from '~/model/Users'

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
    try {
        const requestResponse = await $fetch('/api/users/all')
        const parsedList = this.generateUsers(requestResponse)
        usersStore.setUsers(parsedList)
    } catch (error) {
        console.error('Failed to fetch users:', error);
        throw error;
    }
  }

  getUserById(id: number | string) {
    return this.findUserById(id)
  }

  createUser(user: User) {
    this.createNewUser(user)
  }

}

export const usersController = new UsersController()
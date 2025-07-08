import { UsersDataModel } from '~/model/Users'

const usersStore = useUsersStore()

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

}

export const usersController = new UsersController()
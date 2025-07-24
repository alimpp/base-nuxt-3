import { UsersDataModel } from "~/model/Users";

import type { IUsersServerResponse, IUserList } from "../types/Users";

const usersStore = useUsersStore();

export class UsersController extends UsersDataModel {
  constructor() {
    super();
  }

  private getCacheData() {
    const list = this.getAllItems();
    if (list) {
      usersStore.setUsers(list);
    }
  }

  async allUsers(): Promise<void> {
    this.getCacheData();
    try {
      const requestResponse = (await this.Get(
        "/api/users/all"
      )) as IUsersServerResponse;
      const parsedList: IUserList[] = await this.usersParsed(requestResponse);
      usersStore.setUsers(parsedList);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      throw error;
    }
  }
}

export const usersController = new UsersController();

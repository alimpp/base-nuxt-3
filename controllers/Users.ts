import { UsersDataModel } from "~/model/Users";

import type { IUsersServerResponse, IUserList } from "../types/Users";

export class UsersController extends UsersDataModel {
  constructor() {
    super();
  }

  private usersStore = useUsersStore();

  private getCacheData() {
    const list = this.getAllItems();
    if (list) {
      this.usersStore.setUsers(list);
    }
  }

  async allUsers(): Promise<void> {
    this.getCacheData();
    try {
      const requestResponse = (await this.Get(
        "/api/users/all"
      )) as IUsersServerResponse;
      const parsedList: IUserList[] = await this.usersParsed(requestResponse);
      this.usersStore.setUsers(parsedList);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      throw error;
    }
  }
}

export const usersController = new UsersController();

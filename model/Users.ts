import { BaseModel } from "./Base";

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
}

export type UsersList = IUser[];

export class UsersDataModel extends BaseModel<IUser> {

  constructor() {
    super('users');
  }

  generateUsers(apiResponse: any): UsersList {
    if (!Array.isArray(apiResponse)) {
      throw new Error('Invalid users data format');
    }
    const result = apiResponse.map((item: any) => ({
      id: String(item.id),
      name: String(item.name),
      username: String(item.username),
      email: String(item.email)
    }));
    this.saveAllItems(result)
    return result
  }

  findUserById(id: number | string) {
    return this.read(id)
  }

  createNewUser(user: IUser) {
    this.create(user)
  }

}
export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
}

export type UsersList = IUser[];

export class UsersDataModel {

  generateUsers(apiResponse: any): UsersList {
    if (!Array.isArray(apiResponse)) {
      throw new Error('Invalid users data format');
    }

    return apiResponse.map((item: any) => ({
      id: String(item.id),
      name: String(item.name),
      username: String(item.username),
      email: String(item.email)
    }));
  }
}
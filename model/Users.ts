import { BaseHttp } from "../core/BaseHttp";

import type { IUsersServerResponse, IUserList } from "../types/Users";

import { filesController } from "@/controllers/Files";
export class UsersDataModel extends BaseHttp {
  constructor() {
    super("users");
  }

  async usersParsed(apiResponse: IUsersServerResponse): Promise<IUserList[]> {
    if (!Array.isArray(apiResponse)) {
      throw new Error("Invalid users data format");
    }
    let userlist = [];
    for (const element of apiResponse) {
      const avatarUrl = element.avatarUrl
        ? await filesController.downloadFileById(element.avatarUrl)
        : "";
      let user: IUserList & { id: string } = {
        fullname: element.fristname + " " + element.lastname,
        fristChar:
          element.fristname[0].toUpperCase() +
          element.lastname[0].toUpperCase(),
        fristname: element.fristname,
        lastname: element.lastname,
        email: element.email,
        id: String(element.id),
        avatarUrl: avatarUrl,
        bio: element.bio,
        avatarColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
        youSendRequest: element.youSendRequest,
        hasFriendRequest: element.hasFriendRequest,
        isFriend: element.isFriend,
      };
      userlist.push(user);
    }
    this.saveAllItems(userlist);
    return userlist;
  }
}

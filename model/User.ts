import { BaseApp } from "../core/BaseApp";

import { filesController } from "@/controllers/Files";

export class UserDataModel extends BaseApp<any> {
  constructor() {
    super("user");
  }

  async profileParsed(user: any) {
    const avatarUrl = user.avatarUrl
      ? await filesController.downloadFileById(user.avatarUrl)
      : "";
    const result = {
      fullname: user.fristname + " " + user.lastname,
      fristChar: user.fristname[0].toUpperCase(),
      fristname: user.fristname,
      lastname: user.lastname,
      email: user.email,
      id: user.id,
      avatarUrl,
      bio: user.bio,
    };
    this.saveItem(result);
    return result;
  }
}

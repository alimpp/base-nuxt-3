import { BaseModel } from "./Base";

import type { IUser } from '@/types/User'

import { filesController } from '@/controllers/Files'

export class UserDataModel extends BaseModel<IUser & { id: string }> {

  constructor() {
    super('user');
  }
  
  async generateProfile(user: any) {
    const avatarUrl = user.avatarUrl ? await filesController.downloadFileById(user.avatarUrl) : '';
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
    this.saveItem(result)
    return result
  }
}
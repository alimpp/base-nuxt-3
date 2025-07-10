import { BaseModel } from "./Base";

import type { IUser } from '@/types/User'


export type UsersList = IUser[];

export class UserDataModel extends BaseModel<IUser & { id: string }> {

  constructor() {
    super('user');
  }
  
  generateProfile(user: any) {
    const avatarUrl = "";
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
    this.saveAllItems(result)
    return result
  }
}
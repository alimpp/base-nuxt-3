export interface UserData {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  avatarUrl: string;
  bio: string;
  password: string;
}

export interface IServerResponse {
  id: number;
  from: UserData;
  to: UserData;
  friendRequestedBy: UserData
}

export interface IFriendList {
  avatarColor: string,
  avatarUrl: string;
  bio: string;
  email: string;
  friendListId: number | string,
  fristChar: string,
  fristname: string;
  lastname: string;
  fullname: string
  id: number;
}
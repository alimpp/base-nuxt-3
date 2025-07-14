export interface IUsersServerResponse {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  avatarUrl: string | null;
  bio: string | null;
  password: string;
  youSendRequest: boolean;
  hasFriendRequest: boolean;
  isFriend: boolean;
}

export interface IUserList {
  fullname: string;
  fristChar: string;
  fristname: string;
  lastname: string;
  email: string;
  id: number | string;
  avatarUrl: string;
  bio: string;
  avatarColor: string;
  youSendRequest: boolean;
  hasFriendRequest: boolean;
  isFriend: boolean;
}
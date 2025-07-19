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
  to: number;
}

export interface IRequestList {
  avatarColor: string,
  fristChar: string,
  fristname: string;
  lastname: string;
  email: string;
  avatarUrl: string;
  bio: string;
  fullname: string
  id: number;
  requestId: number,
  userId: number
}
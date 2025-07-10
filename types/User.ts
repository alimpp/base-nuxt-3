export interface IUser {
  id: number;
  fristname: string;
  lastname: string,
  email: string,
  avatarUrl: string,
  bio: string
  fullname: string,
  fristChar: string
}

export interface ILoginForm {
    email: string,
    password: string
}
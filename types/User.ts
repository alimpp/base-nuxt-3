export interface IUser {
  id: number | string;
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

export interface IRegisterForm {
    email: string,
    password: string
    fristname: string,
    lastname: string,
}
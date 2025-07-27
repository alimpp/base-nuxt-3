export interface AuthorData {
  id: number;
  fristname: string;
  lastname: string;
  email: string;
  avatarUrl: string;
  bio: string;
}

export interface IServerResponse {
  id: number;
  authorId: number;
  note: string;
  created_at: string,
  author: AuthorData
}

export interface INote {
  id: number;
  authorId: number;
  author: AuthorData;
  note: string;
  created_at: string;
}
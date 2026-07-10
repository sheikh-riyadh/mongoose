export enum Role {
  USER = "user",
  ADMIN = "admin",
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
}

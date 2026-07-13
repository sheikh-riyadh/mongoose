import { Model } from "mongoose";

export enum Role {
  USER = "user",
  ADMIN = "admin",
}

export interface IAddress {
  city: string;
  street: string;
  zip: number;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  address: IAddress;
}

// For instance methods
export interface UserIntanceMethod {
  hashPassword(password: string): Promise<string>;
}

export type UserModel = Model<IUser, {}, UserIntanceMethod>;

// For statice methods

export interface IUserStaticeMethods extends Model<IUser> {
  hashPassword(password: string): Promise<string>;
}

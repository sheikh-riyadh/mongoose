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

export interface UserIntanceMethod {
  hashPassword(plainPassword: string):Promise<string>;
}


export type UserModel = Model<IUser,{}, UserIntanceMethod>
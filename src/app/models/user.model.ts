import { model, Schema } from "mongoose";
import {
  IAddress,
  IUser,
  IUserStaticeMethods,
  Role,
  UserIntanceMethod,
  UserModel,
} from "../interfaces/user.interface";
import bcrypt from "bcryptjs";

const addressSchema = new Schema<IAddress>(
  {
    city: { type: String, required: true },
    street: { type: String, required: true },
    zip: { type: Number, required: true },
  },
  {
    _id: false,
  },
);

const userSchema = new Schema<IUser, IUserStaticeMethods, UserIntanceMethod>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.USER,
    },
    address: addressSchema,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);



// For instace methods
userSchema.method("hashPassword", async function(password: string) {
  this.password = await bcrypt.hash(password, 10);
  return this.save();
});


// For statice methods

userSchema.static("hashPassword", async function(plainPassword: string) {
  const password = await bcrypt.hash(plainPassword, 10);
  return password;
});


export const User = model<IUser, IUserStaticeMethods>("User", userSchema);

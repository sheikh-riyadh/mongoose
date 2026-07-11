import { model, Schema } from "mongoose";
import { IAddress, IUser, Role } from "../interfaces/user.interface";

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

const userSchema = new Schema<IUser>(
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

export const User = model<IUser>("User", userSchema);

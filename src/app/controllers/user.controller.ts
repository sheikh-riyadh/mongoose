import express, { Request, Response } from "express";
import { User } from "../models/user.model";
import z from "zod";
import { IUser, Role } from "../interfaces/user.interface";

export const userRoutes = express.Router();

// const userZodSchema = z.object({
//   firstName: z.string(),
//   lastName: z.string(),
//   email: z.string(),
//   password: z.string(),
//   role: z.enum(Role),
//   address: z.object({
//     city: z.string(),
//     street: z.string(),
//     zip: z.number(),
//   }),
// });

const userZodSchema: z.ZodType<IUser> = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(Role),
  address: z.object({
    city: z.string(),
    street: z.string(),
    zip: z.number(),
  }),
});

userRoutes.get("/", async (req: Request, res: Response) => {
  const users = await User.find({});
  res.status(200).json({
    success: true,
    message: "Retrive users successfuly",
    data: users,
  });
});

userRoutes.get("/single-user/:id", async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await User.findById(userId);

  res.status(200).json({
    success: true,
    message: "Retrive user successfuly",
    data: user,
  });
});

userRoutes.post("/create", async (req: Request, res: Response) => {
  try {
    const data = await userZodSchema.parseAsync(req.body);
    const response = await User.create(data);
    res.status(200).json({
      success: true,
      message: "Create user successfuly",
      data: response,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "error",
      data: error,
    });
  }
});

userRoutes.patch("/update/:id", async (req: Request, res: Response) => {
  const userId = req.params.id;
  const data = req.body;

  const response = await User.findByIdAndUpdate(userId, data, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "Updated user successfuly",
    data: response,
  });
});

userRoutes.delete("/delete/:id", async (req: Request, res: Response) => {
  const userId = req.params.id;
  const response = await User.findByIdAndDelete(userId);

  res.status(200).json({
    success: true,
    message: "Delete user successfuly",
    data: response,
  });
});

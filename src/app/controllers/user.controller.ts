import express, { Request, Response } from "express";
import { User } from "../models/user.model";

export const userRoutes = express.Router();

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
  const data = req.body;
  const response = await User.create(data);
  res.status(200).json({
    success: true,
    message: "Create user successfuly",
    data: response,
  });
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

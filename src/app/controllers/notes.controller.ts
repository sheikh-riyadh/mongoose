import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";

export const notesRoutes = express.Router();

notesRoutes.get("/", async (req: Request, res: Response) => {
  const data = await Note.find({}).populate("user");
  res.status(200).json({
    success: true,
    message: "Retrive data successfuly",
    data,
  });
});

notesRoutes.get("/single/:id", async (req: Request, res: Response) => {
  const noteID = req.params.id;
  const data = await Note.findById(noteID);

  res.status(200).json({
    success: true,
    message: "Retrive data successfuly",
    data,
  });
});

notesRoutes.post("/create", async (req: Request, res: Response) => {
  const data = req.body;
  await Note.create(data);

  res.status(201).json({
    success: true,
    message: "Note created successfuly",
    data,
  });
});

notesRoutes.patch("/update/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;

  const response = await Note.findByIdAndUpdate(id, { ...data }, { new: true });
  res.status(200).json({
    success: true,
    message: "Note updated successfuly",
    data: response,
  });
});

notesRoutes.delete("/delete/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await Note.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    message: "Note deleted successfuly",
    data,
  });
});

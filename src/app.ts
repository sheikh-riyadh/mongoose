import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();

const noteSchema = new Schema({
  title: String,
  content: String,
});

const Note = model("Note", noteSchema);

app.post("/create-note", async (req: Request, res: Response) => {
  const myNote = new Note({
    title: "Learning mongoose",
    content: "I am learning mongoose",
  });

  await myNote.save()

  res.status(201).json({
    success: true,
    message: "Note created successfuly",
    note: myNote,
  });
});

app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome to mongoose practice");
});

export default app;

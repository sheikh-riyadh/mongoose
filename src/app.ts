import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();

// Middleware
app.use(express.json());

const noteSchema = new Schema({
  title: String,
  content: String,
});

const Note = model("Note", noteSchema);

app.get("/note", async (req: Request, res: Response) => {
  const data = await Note.find({});
  res.status(200).json({
    success: true,
    message: "Retrive data successfuly",
    data,
  });
});

app.get("/note/single/:id", async (req: Request, res: Response) => {
  const noteID = req.params.id;
  const data = await Note.findById(noteID);

  res.status(200).json({
    success: true,
    message: "Retrive data successfuly",
    data,
  });
});

app.post("/note/create", async (req: Request, res: Response) => {
  const data = req.body;
  await Note.create(data);

  res.status(201).json({
    success: true,
    message: "Note created successfuly",
    data,
  });
});

app.patch("/note/update/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;

  const response = await Note.findByIdAndUpdate(id, { ...data }, { new: true });
  res.status(200).json({
    success: true,
    message: "Note updated successfuly",
    data: response,
  });
});

app.delete("/note/delete/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await Note.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    message: "Note deleted successfuly",
    data,
  });
});

app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome to mongoose practice");
});

export default app;

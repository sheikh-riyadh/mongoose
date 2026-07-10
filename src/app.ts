import express, { Application, Request, Response } from "express";
import { notesRoutes } from "./app/controllers/notes.controller";

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/note", notesRoutes);

app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome to mongoose practice");
});

export default app;

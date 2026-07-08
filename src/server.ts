import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://mongoose:TVZSETzaHTDyQsRe@cluster0.wjboujk.mongodb.net/mongoose_practice",
    );
    console.log("Connected to mongodb")
    const server: Server = app.listen(PORT, () => {
      console.log(`Server listening on ${PORT} port`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

import { model, Schema } from "mongoose";
import { INodes } from "../interfaces/notes.interface";

const notesSchema = new Schema<INodes>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: { type: String, default: "" },
    category: {
      type: String,
      enum: ["personal", "work", "study", "other"],
      default: "personal",
    },
    pinned: { type: Boolean, default: false },
    tags: {
      label: { type: String, required: true },
      color: { type: String, default: "gray" },
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Note = model<INodes>("Note", notesSchema);

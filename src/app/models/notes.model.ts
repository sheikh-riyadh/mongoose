import { model, Schema } from "mongoose";

const notesSchema = new Schema(
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
      label: { type: String, requred: true },
      color: { type: String, default: "gray" },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);


export const Note = model("Note", notesSchema)


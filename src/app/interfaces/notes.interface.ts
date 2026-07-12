import { Types } from "mongoose";

export interface INodes {
  title: string;
  content: string;
  category: "personal" | "work" | "study" | "other";
  pinned: boolean;
  tags: {
    label: string;
    color: string;
  };
  user: { type: Types.ObjectId };
}

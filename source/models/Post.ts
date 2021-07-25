import { Schema, model, Document } from 'mongoose';
import { User } from "./User"

export interface Post extends Document{
    id?: string
    userId: string,
    description : string,
    img : string,
    likes : User[],
  }

const PostSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = model<Post>("Post", PostSchema);
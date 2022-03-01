import mongoose from "mongoose";
import { BookInterface } from "../interfaces/dbInterfaces";

const bookSchema = new mongoose.Schema<BookInterface>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model<BookInterface>("Book", bookSchema);
export default Book;

import Book from "../models/Book";
import { BookInterface } from "../interfaces/dbInterfaces";

export const addBookToDB = async (
  title: string,
  author: string,
  description: string
) => {
  try {
    const book = new Book<BookInterface>({
      title,
      author,
      description,
    });
    await book.save();
    return book;
  } catch (err) {
    throw err;
  }
};

export const updateBookInDb = async (
  bookId: string,
  title: string,
  author: string,
  description: string
) => {
  try {
    const book = await Book.findById(bookId);
    if (!book) throw new Error("Book not found");
    if (title) book.title = title;
    if (author) book.author = author;
    if (description) book.description = description;
    await book.save();
    return book;
  } catch (err) {
    throw err;
  }
};

export const deleteBookFromDb = async (bookId: string) => {
  try {
    const book = await Book.findById(bookId);
    if (!book) throw new Error("Book not found");
    await book.remove();
    return book;
  } catch (err) {
    throw err;
  }
};

export const getBookFromDb = async (bookId: string) => {
  try {
    const book = await Book.findById(bookId);
    if (!book) throw new Error("Book not found");
    return book;
  } catch (err) {
    throw err;
  }
};

export const getBooksFromDb = async () => {
  try {
    const books = await Book.find();
    return books;
  } catch (err) {
    throw err;
  }
};

import { Request, Response, NextFunction } from "express";
import { AddBook } from "../interfaces/bookInterface";
import ErrorResponse from "../helpers/ErrorResponse";
import sucResponse from "../helpers/sucResponse";
import {
  addBookToDB,
  updateBookInDb,
  deleteBookFromDb,
  getBookFromDb,
  getBooksFromDb,
} from "../services/book";

export const addBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, author, description }: AddBook = req.body;
  if (!title || !author || !description)
    return next(
      new ErrorResponse("Missing fields : title, author, description", 400)
    );
  try {
    const book = await addBookToDB(title, author, description);
    sucResponse(res, 201, { book });
  } catch (err) {
    next(err);
  }
};

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, author, description }: AddBook = req.body;
  const { bookId } = req.params;
  try {
    const book = await updateBookInDb(bookId, title, author, description);
    sucResponse(res, 200, { book });
  } catch (err) {
    next(err);
  }
};

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { bookId } = req.params;
  try {
    const book = await deleteBookFromDb(bookId);
    sucResponse(res, 200, { book });
  } catch (err) {
    next(err);
  }
};

export const getBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { bookId } = req.params;
  try {
    const book = await getBookFromDb(bookId);
    sucResponse(res, 200, { book });
  } catch (err) {
    next(err);
  }
};

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await getBooksFromDb();
    sucResponse(res, 200, { books });
  } catch (err) {
    next(err);
  }
};

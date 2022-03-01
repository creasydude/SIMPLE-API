import express from "express";
import { addBook, deleteBook, getBook, updateBook , getBooks} from "../controllers/book";
const Router = express.Router();

Router.post("/addBook", addBook);
Router.put("/updateBook/:bookId",updateBook);
Router.delete("/deleteBook/:bookId",deleteBook);
Router.get("/getBook/:bookId", getBook);
Router.get("/getBooks", getBooks);

export default Router;

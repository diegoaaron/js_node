import express from "express";
import {
  addBook,
  readAllBooks,
  readUniqueBook,
  putUpdateBook,
  deleteBook,
} from "../controller/book.controller.js";

const router = express.Router();

// create book

router.post("/addbook", addBook);

// read all books

router.get("/readallbooks", readAllBooks);

// read unique book

router.get("/readuniquebook/:id", readUniqueBook);

// update book with PUT

router.put("/updatebook/:id", putUpdateBook);

// update book with PATCH

// delete book

router.delete("/deletebook/:id", deleteBook);

export default router;

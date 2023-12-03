import express from "express";
import { addBook } from "../controller/book.controller.js";

const router = express.Router();

// create book

router.post("/addbook", addBook);

// create author

// router.post("/addauthor", addAuthor);

export default router;

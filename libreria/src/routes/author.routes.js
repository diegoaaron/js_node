import express from "express";
import {
  addAuthor,
  readAllAuthors,
  readUniqueAuthor,
  putUpdateAuthor,
  deleteAuthor,
} from "../controller/author.controller.js";

const router = express.Router();

// create author

router.post("/addauthor", addAuthor);

// read all authors

router.get("/readallauthors", readAllAuthors);

// read unique author

router.get("/readuniqueauthor/:id", readUniqueAuthor);

// update author with PUT

router.put("/updateauthor/:id", putUpdateAuthor);

// update author with PATCH


// delete author

router.delete("/deleteauthor/:id", deleteAuthor);

export default router;

import express from "express";
import {
  validate,
  addAutor,
  readAllAutores,
  readUniqueAutor,
  putUpdateAutor,
  deleteAutor,
} from "../controller/autor.controller.js";

const router = express.Router();

// create autor

router.post("/addautor", validate("addAutor"), addAutor);

// read all autor

router.get("/readallautores", readAllAutores);

// read unique autor

router.get("/readuniqueautor/:id", readUniqueAutor);

// update autor with PUT

router.put("/putupdateautor/:id", putUpdateAutor);

// update autor with PATCH

// delete autor

router.delete("/deleteautor/:id", deleteAutor);

export default router;

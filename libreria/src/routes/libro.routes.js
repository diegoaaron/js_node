import express from "express";
import {
  validacionLibro,
  addLibro,
  readAllLibros,
  readUniqueLibro,
  putUpdateLibro,
  deleteLibro,
} from "../controller/libro.controller.js";

const router = express.Router();

// create libro

router.post("/addlibro", validacionLibro("addLibro"), addLibro);

// read all libro

router.get("/readalllibros", readAllLibros);

// read unique libro

router.get("/readuniquelibro/:id", readUniqueLibro);

// update libro with PUT

router.put("/putupdatelibro/:id", validacionLibro("putUpdateLibro"), putUpdateLibro);

// update libro with PATCH

// delete libro

router.delete("/deletelibro/:id", deleteLibro);

export default router;

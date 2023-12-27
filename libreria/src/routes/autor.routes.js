import express from "express";
import {
  obtenertoken,
  validacionAutor,
  addAutor,
  readAllAutores,
  readUniqueAutor,
  putUpdateAutor,
  deleteAutor,
} from "../controller/autor.controller.js";

const router = express.Router();

// aut jwt
router.post("/obtenertoken", obtenertoken);

// create autor
/**
 * @swagger
 * 
 * /addautor:
 *   post:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
router.post("/addautor", validacionAutor("addAutor"), addAutor);

// read all autor

router.get("/readallautores", readAllAutores);

// read unique autor

router.get("/readuniqueautor/:id", readUniqueAutor);

// update autor with PUT

router.put("/putupdateautor/:id", validacionAutor("putUpdateAutor"), putUpdateAutor);

// update autor with PATCH

// delete autor

router.delete("/deleteautor/:id", deleteAutor);

export default router;

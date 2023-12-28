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

// obtener aut jwt
/**
 * @swagger
 * 
 * /obtenertoken:
 *   post:
 *     description: retorna un token de autenticación
 *     summary: retorna un bear token
 *     operationId: obtenertoken
 *     responses:
 *       200:
 *         description: token string response
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               items:
 *                 $ref: '#'
 */
router.post("/obtenertoken", obtenertoken);

// create autor

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

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
 *         description: token generado con validez de 3 minutos
 */
router.post("/obtenertoken", obtenertoken);

// create autor
/**
 * @swagger
 * 
 * /addautor:
 *   post:
 *     description: retorna un token de autenticación
 *     summary: retorna un bear token
 *     security:
 *       - bearerAuth: [eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3IwMSIsIm5hbWUiOiJkaWVnbyIsImV4cCI6MTcwMzgxMTQ0MDA3NSwiaWF0IjoxNzAzODExMjYwfQ.M50SmkLGvnpvSHOMSwkLctoUtdSOtOM0uP1CEedtVhg] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombres:
 *                 type: string
 *               apellidos:
 *                 type: string
 *               fechaNacimiento:
 *                 type: string
 *               fechaMuerte:
 *                 type: string
 *     responses:
 *       200:
 *         description: generar un nuevo autor
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

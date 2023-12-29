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
 * paths:
 *   /obtenertoken:
 *     post:
 *       description: retorna un token de autenticación
 *       summary: retorna un bear token
 *       operationId: obtenertoken
 *       responses:
 *         200:
 *           description: token generado con validez de 3 minutos
 */
router.post("/obtenertoken", obtenertoken);

// create autor
/**
 * @swagger
 *
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *
 * paths: 
 *   /addautor:
 *     post:
 *       description: crear un nuevo autor 
 *       summary: retorna un bear token
 *       security:
 *         - bearerAuth: [] 
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombres:
 *                   type: string
 *                 apellidos:
 *                   type: string
 *                 fechaNacimiento:
 *                   type: string
 *                 fechaMuerte:
 *                   type: string
 *       responses:
 *         200:
 *           description: generar un nuevo autor
 */
router.post("/addautor", validacionAutor("addAutor"), addAutor);

// read all autor
/**
 * @swagger
 * 
 * paths:
 *   /readallautores:
 *     get:
 *       description: retorna la lista de todos los autores
 *       summary: retorno de autores
 *       responses:
 *         200:
 *           description: lista de autores
 */
router.get("/readallautores", readAllAutores);

// read unique autor
/**
 * @swagger
 * 
 * paths:
 *   /readuniqueautor/{id}:
 *     get:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID del autor
 *       description: retorna información del autor
 *       summary: info del autor
 *       responses:
 *         200:
 *           description: información del autor
 */
router.get("/readuniqueautor/:id", readUniqueAutor);

// update autor with PUT
/**
 * @swagger
 * 
 * paths:
 *   /putupdateautor/{id}:
 *     put:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID del autor
 *       description: actualización de información del autor
 *       summary: actualiza autor
 *       security:
 *         - bearerAuth: [] 
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombres:
 *                   type: string
 *                 apellidos:
 *                   type: string
 *                 fechaNacimiento:
 *                   type: string
 *                 fechaMuerte:
 *                   type: string
 *       responses:
 *         200:
 *           description: información de autor actualizada
 */
router.put("/putupdateautor/:id", validacionAutor("putUpdateAutor"), putUpdateAutor);

// update autor with PATCH

// delete autor
/**
 * @swagger
 * 
 * paths:
 *   /deleteautor/{id}:
 *     delete:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID del autor
 *       description: elimina el autor enviado
 *       summary: eliminacion autor
 *       security:
 *         - bearerAuth: [] 
 *       responses:
 *         200:
 *           description: confirmacion de autor eliminado
 */
router.delete("/deleteautor/:id", deleteAutor);

export default router;

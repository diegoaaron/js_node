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
 *   /addlibro:
 *     post:
 *       description: registra un nuevo libro
 *       summary: registra libro
 *       security:
 *         - bearerAuth: [] 
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 autor:
 *                   type: array
 *                   items:
 *                     type: string
 *                 titulo:
 *                   type: string
 *                 resumen:
 *                   type: string
 *                 isbn:
 *                   type: string
 *                 serie:
 *                   type: string
 *                 genero:
 *                   type: array
 *                   items:
 *                     type: string
 *                 estado:
 *                   type: string
 *       responses:
 *         200:
 *           description: nuevo libro registrado
 */
router.post("/addlibro", validacionLibro("addLibro"), addLibro);

// read all libro
/**
 * @swagger
 * 
 * paths:
 *   /readalllibros:
 *     get:
 *       description: retorna la lista de todos los libros
 *       summary: retorno de libros
 *       responses:
 *         200:
 *           description: lista de libros
 */
router.get("/readalllibros", readAllLibros);

// read unique libro
/**
 * @swagger
 * 
 * paths:
 *   /readuniquelibro/{id}:
 *     get:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID del libro
 *       description: retorna información del libro
 *       summary: información de un libro
 *       responses:
 *         200:
 *           description: info del libro
 */
router.get("/readuniquelibro/:id", readUniqueLibro);

// update libro with PUT
/**
 * @swagger
 * 
 * paths:
 *   /putupdatelibro/{id}:
 *     put:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID del libro
 *       description: actualización de información del libro
 *       summary: actualiza libro
 *       security:
 *         - bearerAuth: [] 
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 autor:
 *                   type: array
 *                   items:
 *                     type: string
 *                 titulo:
 *                   type: string
 *                 resumen:
 *                   type: string
 *                 isbn:
 *                   type: string
 *                 serie:
 *                   type: string
 *                 genero:
 *                   type: array
 *                   items:
 *                     type: string
 *                 estado:
 *                   type: string
 *       responses:
 *         200:
 *           description: información de libro actualizada
 */
router.put("/putupdatelibro/:id", validacionLibro("putUpdateLibro"), putUpdateLibro);

// update libro with PATCH

// delete libro
/**
 * @swagger
 * 
 * paths:
 *   /deletelibro/{id}:
 *     delete:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID del libro
 *       description: elimina el libro
 *       summary: eliminacion de libro
 *       security:
 *         - bearerAuth: [] 
 *       responses:
 *         200:
 *           description: confirmacion de libro eliminado
 */
router.delete("/deletelibro/:id", deleteLibro);

export default router;

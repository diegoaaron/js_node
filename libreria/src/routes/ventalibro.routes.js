import express from "express";

import {
  validacionLibro,
  addVentaLibro,
  readAllVentaLibro,
  readUniqueVentaLibro,
  putUpdateVentaLibro,
  deleteVentaLibro,
} from "../controller/ventalibro.controller.js";

const router = express.Router();

// create bookInstance
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
 *   /addventalibro:
 *     post:
 *       description: registra la venta de libros
 *       summary: registro de venta de libros
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombreCliente:
 *                   type: string
 *                 libro:
 *                   type: array
 *                   items:
 *                     type: string
 *                 correo:
 *                   type: string
 *                 fechaVenta:
 *                   type: string
 *       responses:
 *         200:
 *           description: nuevo libro registrado
 */
router.post("/addventalibro", validacionLibro("addVentaLibro"), addVentaLibro);

// read all bookInstances
/**
 * @swagger
 *
 * paths:
 *   /readallventalibro:
 *     get:
 *       description: retorna la lista de las venta de libros
 *       summary: retorno de venta de libros
 *       responses:
 *         200:
 *           description: lista de venta de libros
 */
router.get("/readallventalibro", readAllVentaLibro);

// read unique bookInstance
/**
 * @swagger
 *
 * paths:
 *   /readuniqueventalibro/{id}:
 *     get:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID del venta de libros
 *       description: retorna información de la venta de libros
 *       summary: información de una venta de libros
 *       responses:
 *         200:
 *           description: info de venta de libros
 */
router.get("/readuniqueventalibro/:id", readUniqueVentaLibro);

// update bookInstance with PUT
/**
 * @swagger
 *
 * paths:
 *   /putupdateventalibro/{id}:
 *     put:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID del venta libro
 *       description: actualización de información de la venta de libro
 *       summary: actualiza venta de libro
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombreCliente:
 *                   type: string
 *                 libro:
 *                   type: array
 *                   items:
 *                     type: string
 *                 correo:
 *                   type: string
 *                 fechaVenta:
 *                   type: string
 *       responses:
 *         200:
 *           description: información de libro actualizada
 */
router.put(
  "/putupdateventalibro/:id",
  validacionLibro("putUpdateVentaLibro"),
  putUpdateVentaLibro
);

// update bookInstance with PATCH

// delete bookInstance
/**
 * @swagger
 * 
 * paths:
 *   /deleteventalibro/{id}:
 *     delete:
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID de la venta de libro
 *       description: elimina venta de libro
 *       summary: eliminacion de la venta de un libro
 *       security:
 *         - bearerAuth: [] 
 *       responses:
 *         200:
 *           description: confirmacion de una venta de libro eliminado
 */
router.delete("/deleteventalibro/:id", deleteVentaLibro);

export default router;

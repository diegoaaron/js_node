import express from "express";
import { busquedaDeArticulos } from "../controller/scan.controller.js";

const router = express.Router();

// buscar articulos
router.get("/busquedadearticulos/:palabra", busquedaDeArticulos);

export default router;

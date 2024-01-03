import express from "express";
import {
  loginInWeb,
  leerApuestasFutbol,
  leerUnicaApuesta,
  leerApuestasFinalizadas,
} from "../controller/scan.controller.js";

const router = express.Router();

// login en la web
router.get("/logininweb", loginInWeb);

// leer apuestas de futbol
router.get("/leerapuestasfutbol", leerApuestasFutbol);

// leer una unica apuesta
router.get("/leerunicaapuesta/:id", leerUnicaApuesta);

// leer apuestas finalizadas
router.get("/leerapuestasfinalizadas", leerApuestasFinalizadas);

export default router;

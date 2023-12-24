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

router.post("/addventalibro", validacionLibro("addVentaLibro"), addVentaLibro);

// read all bookInstances

router.get("/readallventalibro", readAllVentaLibro);

// read unique bookInstance

router.get("/readuniqueventalibro/:id", readUniqueVentaLibro);

// update bookInstance with PUT

router.put(
  "/putupdateventalibro/:id",
  validacionLibro("putUpdateVentaLibro"),
  putUpdateVentaLibro
);

// update bookInstance with PATCH

// delete bookInstance

router.delete("/deleteventalibro/:id", deleteVentaLibro);

export default router;

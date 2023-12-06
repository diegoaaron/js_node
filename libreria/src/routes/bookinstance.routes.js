import express from "express";

import {
  addBookInstance,
  readAllBookInstance,
  readUniqueBookInstance,
  putUpdateBookInstance,
  deleteBookInstance,
} from "../controller/bookinstance.controller.js";

const router = express.Router();

// create bookInstance

router.post("/addbookinstance", addBookInstance);

// read all bookInstances

router.get("/readallbookinstance", readAllBookInstance);

// read unique bookInstance

router.get("/readuniquebookinstance/:id", readUniqueBookInstance);

// update bookInstance with PUT

router.put("/updatebookinstance/:id", putUpdateBookInstance);

// update bookInstance with PATCH

// delete bookInstance

router.delete("/deletebookinstance/:id", deleteBookInstance);

export default router;

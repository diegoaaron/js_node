import express from "express";

import { addBookInstance } from "../controller/bookinstance.controller.js";

const router = express.Router();

// create book

router.post("/addbookinstance", addBookInstance);

export default router;

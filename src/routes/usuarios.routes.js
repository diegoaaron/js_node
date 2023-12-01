import express from "express";
import {
  addUser,
  readAllUser,
  readUniqueUser,
  updateUser,
  deleteUser,
} from "../controller/usuarios.controller.js";

const router = express.Router();

// create user

router.post("/adduser", addUser);

// read all users

router.get("/readallusers", readAllUser);

// read unique user

router.get("/readuniqueuser/:id", readUniqueUser)

// update user

router.put("/updateuser/:id", updateUser);

// delete user

router.delete("/userdelete/:id", deleteUser);

export default router;

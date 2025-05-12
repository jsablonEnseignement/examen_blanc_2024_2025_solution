import express from "express";
import {
  getUsers,
  getUsersAdmin
} from "../controllers/uers.controller";

const router = express.Router();

router.get("/", getUsers);

router.get("/admins", getUsersAdmin);

export { router };
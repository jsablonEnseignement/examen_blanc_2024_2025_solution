import express from "express";
import {
  getUsersinitials,
  getUsersAdmin
} from "../controllers/uers.controller";

const router = express.Router();

router.get("/", getUsersinitials);

router.get("/admins", getUsersAdmin);

export { router };
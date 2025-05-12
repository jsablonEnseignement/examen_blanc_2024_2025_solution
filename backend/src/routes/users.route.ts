import express from "express";
import {
  getUsers,
  getUserByName
} from "../controllers/uers.controller";

const router = express.Router();

router.get("/", getUsers);

router.get("/:name", getUserByName);

export { router };
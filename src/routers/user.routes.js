import { Router } from "express";
const router = Router();
import {
  getUser,
  getUsers,
  createUser,
} from "../controllers/user.controllers.js";

router.get("/user/:id", getUser);
router.get("/users", getUsers);
router.post("/user", createUser);

export default router;

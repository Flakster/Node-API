import { Router } from "express";
const router = Router();
import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/user.controllers.js";

router.get("/user/:id", getUser);
router.get("/users", getUsers);
router.post("/user", createUser);
router.put("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

export default router;

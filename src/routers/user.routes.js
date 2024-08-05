import { Router } from "express";
const router = Router();
import { getUsers, createUser } from "../controllers/user.controllers.js";

router.get("/users", getUsers);
router.post("/user", createUser);

export default router;

import { Router } from "express";
const router = Router();
import { getUsers } from "../controllers/user.controllers.js";

router.get("/users", getUsers);

export default router;

import express from "express";
import { signIn, signUp, allUsers } from "../controller/user.js";
import authrorized from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authrorized, allUsers);
router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;

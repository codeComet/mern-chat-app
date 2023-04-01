<<<<<<< HEAD
const express = require("express");
const { signIn, signUp, allUsers } = require("../controller/user.js");
const authrorized = require("../middlewares/authMiddleware.js");
=======
import express from "express";
import { signIn, signUp } from "../controller/user.js";
>>>>>>> c76af6666320f2210d32ccb78c6a6ba163f4292b

const router = express.Router();

router.get("/", authrorized, allUsers);
router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;

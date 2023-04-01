const express = require("express");
const { signIn, signUp, allUsers } = require("../controller/user.js");
const authrorized = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", authrorized, allUsers);
router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;

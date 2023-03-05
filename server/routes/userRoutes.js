const express = require("express");
const { signIn, signUp } = require("../controller/user.js");

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signin", signIn);

module.exports = router;

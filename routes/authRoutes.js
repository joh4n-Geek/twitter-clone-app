const express = require("express");
const router = express.Router();
const { logIn, signIn} = require("../controllers/authController");

router.get("/logIn", logIn);
router.post("/signIn", signIn);

module.exports = router;
const express = require("express");
const { loginUser, registerUser } = require("../controllers/auth.controller");
const { validateLogin, validateRegister } = require("../validators/auth.validator");

const router = express.Router();

router.post("/login", validateLogin, loginUser);
router.post("/register", validateRegister, registerUser);

module.exports = router;

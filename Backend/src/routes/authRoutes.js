const express = require("express");
const { register, login, me } = require("../controllers/authController");
const { protect } = require("../middlewares/auth");
const asyncHandler = require("../utils/asyncHandler");
const validate = require("../middlewares/validate");
const { registerSchema, loginSchema } = require("../validators/authSchemas");

const router = express.Router();

// 🔹 Register (anyone)
router.post("/register", validate(registerSchema), asyncHandler(register));

// 🔹 Login (anyone)
router.post("/login", validate(loginSchema), asyncHandler(login));

// 🔹 Get current logged-in user (protected)
router.get("/me", protect, asyncHandler(me));

module.exports = router;

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
// const authMiddleware = require("../middleware/authMiddleware");

// 1. Auth Routes
router.post("/signup", authController.signup);
router.post("/login", authController.login);

// 3. Password Reset Routes
router.post("/request-reset-password", authController.requestResetPassword);
router.get("/validate-reset-token",  authController.validateResetToken);
router.post("/reset-password",  authController.resetPassword);

module.exports = router;

const express = require("express");
const router = express.Router();

const authRoutes = require("../services/auth");
const backendRoutes = require("../services/backend");
// const aiRoutes = require("../services/ai");

router.use("/service/auth", authRoutes);
router.use("/service/backend-service", backendRoutes);
// router.use("/service/ai-service", aiRoutes);

module.exports = router;
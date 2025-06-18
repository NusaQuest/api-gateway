const express = require("express")

const router = express.Router()

router.use("/auth", require("../services/auth"));
router.use("/service/backend-service", require("../services/backend"));
router.use("/service/ai-service", require("../services/ai"));

module.exports = router
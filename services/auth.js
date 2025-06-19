const express = require("express");
const { connectWallet, disconnectWallet, info} = require("../controllers/auth/auth");
const { validateToken } = require("../middlewares/auth");

const router = express.Router();

router.get("/info", info)
router.post("/wallet", connectWallet);
router.delete("/wallet/:wallet", validateToken, disconnectWallet);

module.exports = router
const express = require("express");
const { connectWallet, disconnectWallet } = require("../controllers/auth/auth");

const router = express.Router();

router.post("/wallet", connectWallet);
router.delete("/wallet", disconnectWallet);

module.exports = router
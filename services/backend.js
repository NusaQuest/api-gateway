const express = require("express");
const { getTransactions, addTransaction } = require("../controllers/backend/transaction");
const { getDestinations, addDestination } = require("../controllers/backend/destinations");

const router = express.Router();

router.get("/transactions/:wallet", getTransactions);
router.post("/transactions", addTransaction)
router.get("/destinations", getDestinations)
router.post("/destinations", addDestination)

module.exports = router;
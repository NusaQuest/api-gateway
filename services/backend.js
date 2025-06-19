const express = require("express");
const {
  getTransactions,
  addTransaction,
} = require("../controllers/backend/transaction");
const {
  getDestinations,
  addDestination,
} = require("../controllers/backend/destinations");
const { validateToken } = require("../middlewares/auth");

const router = express.Router();

router.get("/transactions", validateToken, getTransactions);
router.post("/transactions", validateToken, addTransaction);
router.get("/destinations", getDestinations);
router.post("/destinations", validateToken, addDestination);

module.exports = router;

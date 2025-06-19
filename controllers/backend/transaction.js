const axios = require("axios");

const { BACKEND_SERVICE_URL } = require("../../utils/env");
const checkWalletMatch = require("./helper/checker");

async function addTransaction(req, res) {
  const expectedWallet = req.body.wallet;
  const actualWallet = req.auth.wallet;

  if (!checkWalletMatch(expectedWallet, actualWallet)) {
    return res.status(403).json({
      status: "error",
      message: "Unauthorized action. Wallet mismatch.",
    });
  }

  try {
    const response = await axios.post(
      `${BACKEND_SERVICE_URL}/transactions`,
      req.body
    );
    res.status(201).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        detail: error.message,
      });
    }
  }
}

async function getTransactions(req, res) {
  try {
    const wallet = req.auth.wallet;

    const response = await axios.get(
      `${BACKEND_SERVICE_URL}/transactions/${wallet}`
    );
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        detail: error.message,
      });
    }
  }
}

module.exports = {
  addTransaction,
  getTransactions,
};

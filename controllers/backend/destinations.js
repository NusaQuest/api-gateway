const axios = require("axios");

const { BACKEND_SERVICE_URL } = require("../../utils/env");
const checkWalletMatch = require("./helper/checker");

async function addDestination(req, res) {
  const expectedWallet = process.env.ADMIN_WALLET;
  const actualWallet = req.auth.wallet;

  if (!checkWalletMatch(expectedWallet, actualWallet)) {
    return res.status(403).json({
      status: "error",
      message: "Unauthorized action. Wallet mismatch.",
    });
  }

  try {
    const response = await axios.post(
      `${BACKEND_SERVICE_URL}/destinations`,
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

async function getDestinations(_, res) {
  try {
    const response = await axios.get(`${BACKEND_SERVICE_URL}/destinations`);
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
  addDestination,
  getDestinations,
};

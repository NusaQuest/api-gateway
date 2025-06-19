const axios = require("axios");

const BACKEND_SERVICE_URL = require("../../utils/env");

async function addTransaction(req, res) {
  try {
    const response = await axios.post(
      `${BACKEND_SERVICE_URL}/transactions`,
      req.body
    );
    res.status(201).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
}

async function getTransactions(_, res) {
  try {
    const response = await axios.get(`{BACKEND_SERVICE_URL}/transactions`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
}

module.exports = {
  addTransaction,
  getTransactions,
};

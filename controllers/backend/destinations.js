const axios = require("axios");

const BACKEND_SERVICE_URL = require("../../utils/baseUrl");

async function addDestination(req, res) {
  try {
    const response = await axios.post(
      `${BACKEND_SERVICE_URL}/destinations`,
      req.body
    );
    res.status(201).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
}

async function getDestinations(_, res) {
  try {
    const response = await axios.get(`${BACKEND_SERVICE_URL}/destinations`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
}

module.exports = {
  addDestination,
  getDestinations,
};

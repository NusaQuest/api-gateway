const path = require("path");

const showWelcome = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "welcome.html"));
};

const showNotFound = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "views", "not_found.html"));
};

module.exports = { showWelcome, showNotFound };
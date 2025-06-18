const path = require("path");

const showWelcome = (_, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "welcome.html"));
};

const showNotFound = (_, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "views", "not_found.html"));
};

module.exports = { showWelcome, showNotFound };
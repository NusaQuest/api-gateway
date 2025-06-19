const jwt = require("jsonwebtoken");

const SECRET_KEY = require("./env");

const generateToken = (payload) => {
  const options = {
    expiresIn: "1d",
  };

  const token = jwt.sign(payload, SECRET_KEY, options);
  return token;
};

module.exports = {
  generateToken,
};

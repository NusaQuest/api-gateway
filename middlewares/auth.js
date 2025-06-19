const jwt = require("jsonwebtoken");

const SECRET_KEY = require("../utils/env");

const validateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, payload) => {
      if (err) {
        res.status(403).json({
          status: "error",
          message: "Invalid token.",
        });
      } else {
        req.auth = payload;
        next();
      }
    });
  } else {
    res.status(401).json({
      status: "error",
      message: "Token is not provided.",
    });
  }
};

module.exports = { validateToken };

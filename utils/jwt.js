const jwt = require("jsonwebtoken");

const { SECRET_KEY } = require("./env");

const generateToken = (payload) => {
  const options = {
    expiresIn: "1m",
  };
  const token = jwt.sign(payload, SECRET_KEY, options);
  return token;
};

const verifyToken = (token) => {
  if (!token) {
    return {
      status: "error",
      code: 401,
      message: "Token is not provided.",
    };
  }

  try {
    const payload = jwt.verify(token, SECRET_KEY);
    console.log(payload)
    return {
      status: "success",
      code: 200,
      message: "Valid token.",
      data: payload,
    };
  } catch (error) {
    const isExpired = error.name === "TokenExpiredError";
    return {
      status: "error",
      code: 403,
      message: "Invalid or expired token.",
      isExpired: isExpired,
    };
  }
};

module.exports = {
  generateToken,
  verifyToken,
};

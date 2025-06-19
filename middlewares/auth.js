const { verifyToken } = require("../utils/jwt");

const validateToken = (req, res, next) => {
  const result = verifyToken(req.cookies.token);
  if (result.status == "error") {
    if (result.code == 403 && result.isExpired) {
      res.clearCookie("token");
    }
    return res.status(result.code).json({
      status: result.status,
      message: result.message,
    });
  }
  req.auth = result.data;
  console.log(req.auth);
  next();
};

module.exports = { validateToken };

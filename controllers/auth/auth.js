const { generateToken } = require("../../utils/jwt");

async function connectWallet(req, res) {
  const auth = req.body;
  console.log(auth);
  const token = generateToken(auth);
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json({
    status: "success",
    message: "Authentication successful!",
  });
}

async function disconnectWallet(_, res) {
  res.clearCookie("token");
  res.json({
    status: "success",
    message: "You have been logged out successfully.",
  });
}

module.exports = {
  connectWallet,
  disconnectWallet,
};

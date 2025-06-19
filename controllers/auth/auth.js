const { generateToken, verifyToken } = require("../../utils/jwt");
const checkWalletMatch = require("../backend/helper/checker");

async function info(req, res) {
  const result = verifyToken(req.cookies.token);
  console.log(result.status);
  if (result.status == "error") {
    if (result.code == 403 && result.isExpired) {
      res.clearCookie("token");
    }
    return res.status(result.code).json({
      status: result.status,
      message: result.message,
    });
  }

  res.json({
    status: result.status,
    message: result.message,
    data: result.payload,
  });
}

async function connectWallet(req, res) {
  try {
    const auth = req.body;
    const token = generateToken(auth);
    res.cookie("token", token, {
      httpOnly: true,
      maxAges: 60 * 1000,
    });
    res.json({
      status: "success",
      message: "Authentication successful!",
    });
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

async function disconnectWallet(req, res) {
  const expectedWallet = req.params.wallet;
  const actualWallet = req.auth.wallet;

  if (!checkWalletMatch(expectedWallet, actualWallet)) {
    return res.status(403).json({
      status: "error",
      message: "Unauthorized action. Wallet mismatch.",
    });
  }

  try {
    res.clearCookie("token");
    res.json({
      status: "success",
      message: "You have been logged out successfully.",
    });
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
  connectWallet,
  disconnectWallet,
  info,
};

function checkWalletMatch(expectedWallet, actualWallet) {
  if (!expectedWallet || !actualWallet) return false;

  return expectedWallet === actualWallet;
}

module.exports = checkWalletMatch;

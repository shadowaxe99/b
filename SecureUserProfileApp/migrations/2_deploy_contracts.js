
const UserProfile = artifacts.require("UserProfile");
const Transaction = artifacts.require("Transaction");
const Token = artifacts.require("Token");
const DecisionMaking = artifacts.require("DecisionMaking");
const RewardSystem = artifacts.require("RewardSystem");

module.exports = function(deployer) {
  deployer.deploy(UserProfile);
  deployer.deploy(Transaction);
  deployer.deploy(Token);
  deployer.deploy(DecisionMaking);
  deployer.deploy(RewardSystem);
};

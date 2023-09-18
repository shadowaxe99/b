
const RewardSystem = artifacts.require("RewardSystem");

contract("RewardSystem", accounts => {
  let rewardSystem;

  beforeEach(async () => {
    rewardSystem = await RewardSystem.new();
  });

  it("should initialize with zero rewards", async () => {
    const totalRewards = await rewardSystem.totalRewards();
    assert.equal(totalRewards, 0, "Initial rewards not zero");
  });

  it("should allow owner to add rewards", async () => {
    await rewardSystem.addReward(accounts[1], 100, { from: accounts[0] });
    const balance = await rewardSystem.balanceOf(accounts[1]);
    assert.equal(balance, 100, "Reward not added correctly");
  });

  it("should not allow non-owner to add rewards", async () => {
    try {
      await rewardSystem.addReward(accounts[1], 100, { from: accounts[2] });
      assert.fail("Expected revert not received");
    } catch (error) {
      const revertFound = error.message.search('revert') >= 0;
      assert(revertFound, `Expected "revert", got ${error} instead`);
    }
  });
});

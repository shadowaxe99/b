
const DecisionMaking = artifacts.require("DecisionMaking");

contract("DecisionMaking", accounts => {
  let decisionMaking = null;
  before(async () => {
    decisionMaking = await DecisionMaking.deployed();
  });

  it("Should create a new decision", async () => {
    await decisionMaking.createDecision("Decision 1", {from: accounts[0]});
    const decision = await decisionMaking.decisions(0);
    assert(decision.id.toNumber() === 0);
    assert(decision.name === "Decision 1");
    assert(decision.voteCount.toNumber() === 0);
  });

  it("Should vote for a decision", async () => {
    await decisionMaking.vote(0, {from: accounts[0]});
    const decision = await decisionMaking.decisions(0);
    assert(decision.voteCount.toNumber() === 1);
  });

  it("Should not allow to vote for a non-existing decision", async () => {
    try {
      await decisionMaking.vote(99, {from: accounts[0]});
    } catch (e) {
      assert(e.message.includes("Decision does not exist"));
      return;
    }
    assert(false);
  });
});

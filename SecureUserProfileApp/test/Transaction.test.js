
const Transaction = artifacts.require("Transaction");

contract("Transaction", accounts => {
  let transaction = null;
  before(async () => {
    transaction = await Transaction.deployed();
  });

  it("Should create a new transaction", async () => {
    await transaction.createTransaction(accounts[1], 100, {from: accounts[0]});
    const tx = await transaction.transactions(accounts[0]);
    assert(tx.to === accounts[1] && tx.value === 100);
  });

  it("Should NOT create a new transaction if sender balance is too low", async () => {
    try {
      await transaction.createTransaction(accounts[1], 1000, {from: accounts[0]});
    } catch (e) {
      assert(e.message.includes("Sender balance is too low"));
      return;
    }
    assert(false);
  });
});

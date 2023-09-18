
const Token = artifacts.require("Token");

contract("Token", accounts => {
  let token;
  const owner = accounts[0];

  beforeEach(async () => {
    token = await Token.new({ from: owner });
  });

  it("should initialize with zero total supply", async () => {
    const totalSupply = await token.totalSupply();
    assert.equal(totalSupply, 0, "total supply is not zero");
  });

  it("should mint tokens correctly", async () => {
    await token.mint(owner, 100, { from: owner });
    const balance = await token.balanceOf(owner);
    assert.equal(balance, 100, "minting failed");
  });

  it("should transfer tokens correctly", async () => {
    await token.mint(owner, 100, { from: owner });
    await token.transfer(accounts[1], 50, { from: owner });
    const balance = await token.balanceOf(accounts[1]);
    assert.equal(balance, 50, "transfer failed");
  });
});

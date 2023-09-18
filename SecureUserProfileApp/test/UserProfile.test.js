
const UserProfile = artifacts.require("UserProfile");

contract("UserProfile", accounts => {
  let userProfile;

  before(async () => {
    userProfile = await UserProfile.deployed();
  });

  it("should create a new user profile", async () => {
    await userProfile.createUserProfile("John Doe", "john.doe@example.com", {from: accounts[0]});
    const user = await userProfile.getUserProfile(accounts[0]);
    assert.equal(user.name, "John Doe");
    assert.equal(user.email, "john.doe@example.com");
  });

  it("should update user profile", async () => {
    await userProfile.updateUserProfile("Jane Doe", "jane.doe@example.com", {from: accounts[0]});
    const user = await userProfile.getUserProfile(accounts[0]);
    assert.equal(user.name, "Jane Doe");
    assert.equal(user.email, "jane.doe@example.com");
  });

  it("should not allow unauthorized user to update profile", async () => {
    try {
      await userProfile.updateUserProfile("Fake User", "fake.user@example.com", {from: accounts[1]});
    } catch (error) {
      assert(error.message.indexOf('revert') >= 0, "Expected revert error, but got: " + error.message);
    }
  });
});

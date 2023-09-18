
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardSystem is ERC20 {
    address public owner;

    constructor() ERC20("RewardToken", "RTK") {
        owner = msg.sender;
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }

    function rewardUser(address user, uint256 amount) public {
        require(msg.sender == owner, "Only the contract owner can reward users");
        _mint(user, amount);
    }

    function burnTokens(address user, uint256 amount) public {
        require(msg.sender == owner, "Only the contract owner can burn tokens");
        _burn(user, amount);
    }
}


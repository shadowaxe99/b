
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract UserProfile {
    struct User {
        string name;
        string email;
        bytes32 password;
        uint256 balance;
    }

    mapping(address => User) public users;

    function register(string memory _name, string memory _email, bytes32 _password) public {
        User storage user = users[msg.sender];
        user.name = _name;
        user.email = _email;
        user.password = _password;
        user.balance = 0;
    }

    function login(string memory _email, bytes32 _password) public view returns (bool) {
        User storage user = users[msg.sender];
        return (keccak256(abi.encodePacked(user.email)) == keccak256(abi.encodePacked(_email))) && (user.password == _password);
    }

    function getBalance() public view returns (uint256) {
        User storage user = users[msg.sender];
        return user.balance;
    }
}

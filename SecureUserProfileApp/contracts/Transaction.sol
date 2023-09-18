
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Transaction {
    struct TransactionData {
        address sender;
        address receiver;
        uint256 amount;
        uint256 timestamp;
    }

    TransactionData[] public transactions;

    function createTransaction(address _receiver, uint256 _amount) public {
        TransactionData memory newTransaction;
        newTransaction.sender = msg.sender;
        newTransaction.receiver = _receiver;
        newTransaction.amount = _amount;
        newTransaction.timestamp = block.timestamp;

        transactions.push(newTransaction);
    }

    function getTransaction(uint _index) public view returns (address, address, uint256, uint256) {
        TransactionData memory transaction = transactions[_index];
        return (transaction.sender, transaction.receiver, transaction.amount, transaction.timestamp);
    }
}

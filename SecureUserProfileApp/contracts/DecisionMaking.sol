
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DecisionMaking {
    struct Proposal {
        string description;
        uint voteCount;
    }

    address public chairperson;
    mapping(address => bool) public voters;
    Proposal[] public proposals;

    constructor() public {
        chairperson = msg.sender;
    }

    function propose(string memory description) public {
        Proposal memory newProposal = Proposal({
            description: description,
            voteCount: 0
        });

        proposals.push(newProposal);
    }

    function vote(uint proposal) public {
        require(!voters[msg.sender], "Already voted.");
        voters[msg.sender] = true;

        proposals[proposal].voteCount += 1;
    }

    function winningProposal() public view returns (uint winningProposal_) {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }
}

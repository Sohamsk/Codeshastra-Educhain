// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CompletionCert is ERC721, Ownable {
    uint256 private _nextTokenId;

    struct NFT {
        string studentName;
        address studentAddress;
        string courseName;
    }

    mapping(uint256 => NFT) public tokenNFTs;

    constructor(address initialOwner)
        ERC721("CompletionCert", "CMC")
        Ownable(initialOwner)
    {}

    function safeMint(address to, string memory studentName, string memory courseName) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        
        NFT memory newNFT = NFT(studentName, to, courseName); 

        tokenNFTs[tokenId] = newNFT;
    }
}

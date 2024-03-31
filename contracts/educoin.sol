// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^4.0.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract EduCoin is ERC20, Ownable, ERC20Permit {
    uint256 public constant INITIAL_SUPPLY = 200 * 10**18; // Initial supply of EduCoin
    uint256 public constant TARGET_ETH_PRICE = 0.01 ether; // Target price of EduCoin in ETH

    constructor(address initialOwner)
        ERC20("EduCoin", "EDC")
        Ownable(initialOwner)
        ERC20Permit("EduCoin")
    {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function mint(uint256 amount) external onlyOwner {
        _mint(owner(), amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    // Function to buy EduCoin by sending ETH
    function buy() external payable {
        require(msg.value > 0, "Value must be greater than 0");

        // Calculate the amount of EduCoin to be transferred based on the current ETH price
        uint256 tokensToTransfer = msg.value / TARGET_ETH_PRICE;

        // Ensure the contract has enough tokens to transfer
        require(balanceOf(owner()) >= tokensToTransfer, "Insufficient balance in contract");

        // Transfer tokens to the buyer
        _transfer(owner(), msg.sender, tokensToTransfer);
    }

    // Function to sell EduCoin and receive ETH
    function sell(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");

        // Calculate the amount of ETH to be transferred based on the current ETH price
        uint256 ethToTransfer = amount * TARGET_ETH_PRICE;

        // Ensure the contract has enough ETH to transfer
        require(address(this).balance >= ethToTransfer, "Insufficient ETH balance in contract");

        // Transfer tokens from the seller to the contract
        _transfer(msg.sender, owner(), amount);

        // Transfer ETH to the seller
        payable(msg.sender).transfer(ethToTransfer);
    }

    // Function to withdraw ETH from the contract (onlyOwner)
    function withdraw(uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient ETH balance in contract");
        payable(owner()).transfer(amount);
    }

    // Fallback function to receive ETH
    receive() external payable {}
}

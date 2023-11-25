const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function() {
    it("Deploy Your Own Token\n", async function() {
        const HSAToken = await ethers.getContractFactory("HSAToken");
        const token = await HSAToken.deploy("Sangahn Han","HSA");
    
        console.log("       Your Token")
        console.log("Name    : ", await token.name())
        console.log("Symbol  : ", await token.symbol())
        console.log("Decimal : ", await token.decimals())
        const checkDeploy = await token.decimals();
        expect(checkDeploy).to.equal(18);
    })
})

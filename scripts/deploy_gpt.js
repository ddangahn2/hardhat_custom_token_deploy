const { ethers } = require("hardhat");

async function main() {
  // 스마트 계약을 배포할 때 사용할 계정을 얻어옵니다.
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // 스마트 계약의 팩토리를 얻어옵니다.
  const HSAToken = await ethers.getContractFactory("HSAToken");

  // 스마트 계약을 배포합니다. 초기 토큰 공급량으로 100을 전달합니다.
  const hsa = await HSAToken.deploy(100);

  console.log("HSAToken deployed to:", hsa.address);
}

// 스크립트 실행
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

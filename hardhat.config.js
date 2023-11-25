require('dotenv').config(); // dotenv 모듈을 추가해 .env 파일 로드 
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */ 
module.exports = {
  defaultNetwork: "hardhat", 
  networks: {
    hardhat: { }, 
    sepolia : {
      url: process.env.SEPOLIA_URL, // 환경 변수 사용 
      accounts: {
        mnemonic: process.env.MNEMONIC // 환경 변수 사용 
      },
      gas: 2100000, 
      gasPrice: 5000000000, 
      saveDeployments: true
    } 
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY // 환경 변수 사용
  },
  // The Solidity version pragma statement in these files doesn't match any of the configured compilers in your config. Change the pragma or configure additional compiler versions in your hardhat config.
  // 위 에러에 대해서 아래 solidity 버전을 수정해주면 된다.
  solidity: "0.8.20", 
  namedAccounts:{
    deployer:{ 
      default: 0
    } 
  } 
};
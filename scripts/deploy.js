async function main() {
    const [deployer] = await ethers.getSigners();

    // HSAToken 컨트랙트의 생성자를 변수 HSAToken에 저장
    const HSAToken = await ethers.getContractFactory("HSAToken");
    // HSAToken 컨트랙트 배포
    const HSA = await HSAToken.deploy();
  }
  
  main() // main 함수를 호출하고 함수 실행이 완료되면 프로세스 종료, 에러가 발생하면 콘솔에 출력하고 프로세스를 에러코드 1로 종료
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
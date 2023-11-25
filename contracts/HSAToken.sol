// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0; // solidity의 버전 지정

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// ERC20을 상속받아서 HSAToken 생성
// ERC20 : 대체 가능한 토큰(fungible token)의 표준
contract HSAToken is ERC20 {
    // 생성자 : 배포될 때 호출됨
    // constructor가 값을 전달 받을 경우 migration.js > deploy 함수에 ,로 구분하여 값을 넣어줌
    
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        uint256 initialSupply = 100 * (10**18); // 100 토큰, 18자리 소수점
        _mint(msg.sender, initialSupply);
    }


    // ERC20에 존재하는 decimals()를 override
    function decimals() public view virtual override returns (uint8){
        // 토큰의 양을 나눌 수 있는 소수 자릿수
        return 18;
    }
}


 // constructor(uint256 initialSupply) ERC20("SangahnHan", "HSA"){
    //     // ERC20토큰을 초기화하고 발행하는 역할. msg.sender는 현재 스마트컨트랙트를 배포한 계정의 주소.
    //     // _mint는 특정 주소에게 특정 양의 토큰을 발행하는 역할
    //     // initialSupply는 사용자가 입력하는 값이다. 사용자는 배포할 때 초기 토큰 공급량 결정 가능.
    //     _mint(msg.sender, initialSupply);
    // }
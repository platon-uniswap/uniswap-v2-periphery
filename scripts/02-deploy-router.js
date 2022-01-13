const { ethers } = require("hardhat");


async function main() {
	const [deployer] = await ethers.getSigners();
	console.log('deployer address,', deployer.address)
	const UniswapV2Router02Contract = await ethers.getContractFactory('UniswapV2Router02')
	console.log('deploy router02')
	const factoryAddress = '0x154b2f6202a5033Cb150931177B86a2B03E485dF'
	const wethAddress = '0x2d51fd37f175984603A7d6C4758b27D09A1B2227'
	const router02 = await UniswapV2Router02Contract.deploy(factoryAddress, wethAddress)
	console.log('router02 address,', router02.address) // 0x2d51fd37f175984603A7d6C4758b27D09A1B2227
	// multicall 0xb80D5C1DE16301e57a13F19e2545E9813A4C2681
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

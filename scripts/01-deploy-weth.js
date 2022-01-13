const { ethers } = require("hardhat");


async function main() {
	const [deployer] = await ethers.getSigners();
	console.log('deployer address,', deployer.address)
	const WETH9Contract = await ethers.getContractFactory('WETH9')
	console.log('deploy weth9')
	const weth = await WETH9Contract.deploy()
	console.log('weth9 address,', weth.address)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

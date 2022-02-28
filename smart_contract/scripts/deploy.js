const hre = require("hardhat");

async function main() {
  const profileImageMinterFactory = await hre.ethers.getContractFactory(
    "ProfileImageNfts"
  );
  const profileImageContract = await profileImageFactory.deploy(
    "Hello, Hardhat!"
  );

  await profileImageContract.deployed();

  console.log(
    "Profile Image Minter deployed to:",
    profileImageContract.address
  );
}

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

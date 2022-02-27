require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/bmVWiNCt1FEl4ULDCqc80UKzOpTzzAag",
      accounts: [
        "b6ad69c6f4bc78b2e1ad713874bb26e9f2ff28b7fb07c158dbdf4ab6642961d3",
      ],
    },
  },
};

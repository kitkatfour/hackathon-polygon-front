require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy-ethers");

const defaultNetwork = "localhost";

module.exports = {
  defaultNetwork,
  // gasReporter: {
  //   currency: "USD",
  //   coinmarketcap: process.env.COINMARKETCAP || null,
  // },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    localhost: {
      url: "http://localhost:8545",
    },
    // polygon: {
    //   url: "https://speedy-nodes-nyc.moralis.io/XXXXXXXXXXXXXXXXXXXx/polygon/mainnet", // <---- YOUR MORALIS ID! (not limited to infura)
    //   gasPrice: 30000000000,
    //   accounts: [process.env.a],
    // },

    // mumbai: {
    //   url: "https://polygon-mumbai.g.alchemy.com/v2/ALCHEMYID", // <---- YOUR ALCHEMY ID! (not limited to infura)
    //   gasPrice: 30000000000,
    //   accounts: [process.env.a],
    // },
  },
  solidity: "0.8.9",
};

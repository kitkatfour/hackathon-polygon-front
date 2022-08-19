const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("Lock", {
    from: deployer,
    // args: [070202],
    log: true,
  });
};
module.exports.tags = ["Lock"];

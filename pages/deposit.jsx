import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import { useProvider, useContract, useSigner, useAccount } from "wagmi";
import abi from "../contracts/PrizePool.json";
import erc20abi from "../contracts/ERC20ABI.json";
import ControlledTokenAbi from "../contracts/ControlledToken.json";
import { ethers } from "ethers";
// import { useSendTransactionWrapper } from "../hooks/useSendTransactionWrapper";

const deposit = () => {
  const { data: signer } = useSigner();

  const [amount, setAmount] = useState();
  const poolAddress = "0x26e507ce8ce828abc7fc986c8a19f4354d5b8cd2";

  // Mumbai PrizePool contract address
  // Polygon PrizePool contract addrress
  // const poolAddress = "0x4f3Fc13df562c7C06e530b054834a282fc1961f7";

  // PT Aave aAAVE Ticket token address
  const tokenAddress = "0x74c873c719866a650F151A9fBF0cB5b5c6315906";

  // WETH Polygon token address
  // const tokenAddress = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";

  const wooyPoolContract = useContract({
    addressOrName: poolAddress,
    contractInterface: abi,
    signerOrProvider: signer,
  });

  const erc20Contract = useContract({
    addressOrName: tokenAddress,
    contractInterface: ControlledTokenAbi,
    signerOrProvider: signer,
  });

  const deposit = async (e) => {
    const address = await signer.getAddress();
    const parsedAmount = ethers.utils.parseUnits(amount);

    const approveTx = await erc20Contract.approve(poolAddress, parsedAmount);
    console.log(approveTx, "aprobacion");
    const aTx = await approveTx.wait();
    console.log(aTx, "await tx");

    const tx = await wooyPoolContract.depositTo(
      address,
      parsedAmount,
      tokenAddress,
      ethers.constants.AddressZero
    );

    console.log(tx, "Depositando....");

    const depositAtx = await tx.wait();
    console.log(depositAtx, "depositAtx");
  };

  return (
    <Layout>
      <div className="flex justify-center items-center gap-8 h-full w-full">
        <div className="bg-white h-full flex flex-col rounded-md py-24 px-48">
          <h1 className="text-black">Deposit USDC on Polygon</h1>
          <p className="text-black">More networks and tokens coming soon!</p>
          <input
            type="text"
            placeholder="Enter Amount!"
            className="border-2 rounded-lg px-4 py-2 border-black mt-8"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={() => deposit()}
            className="mt-4 lg:px-16 px-8 py-2 bg-[#ED652B] rounded-md hover:shadow-2xl hover:bg-[#fd692a] transition-all"
          >
            CONTINUE
          </button>
          <p className="text-black">
            You'll nee to approve this transaction on your wallet first.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default deposit;

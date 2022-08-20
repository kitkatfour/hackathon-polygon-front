import { useState } from "react";
import { useProvider, useContract, useSigner, useAccount } from "wagmi";
import Card from "../components/Card";
import abi from "../contracts/PrizePool.json";
import erc20abi from "../contracts/ERC20ABI.json";
import ControlledTokenAbi from "../contracts/ControlledToken.json";
import Layout from "../components/Layout";
import { ethers } from "ethers";
// import { useSendTransactionWrapper } from "../hooks/useSendTransactionWrapper";

export default function Home() {
  // const sendTx = useSendTransactionWrapper();
  const [amount, setAmount] = useState();
  // const provider = useProvider();
  // const { address, isConnected } = useAccount();

  const { data: signer } = useSigner();

  // Mumbai PrizePool contract address
  const poolAddress = "0x26e507ce8ce828abc7fc986c8a19f4354d5b8cd2";

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

    // e.preventDefault();

    // const params = [
    //   poolAddress,
    //   ethers.utils.parseUnits("9999999999", Number(decimals)),
    // ];

    // const txName = t(`allowTickerPoolSponsorship`, {});
    // const method = "approve";

    // const id = await sendTx({
    //   name: txName,
    //   contractAbi: ControlledTokenAbi,
    //   contractAddress: tokenAddress,
    //   method,
    //   params,
    //   callbacks: {},
    // });
    // console.log(id, "asdasd");
    // const aId = await id.wait();

    // console.log(aId, "asdasd");

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
      <div className="px-12 w-full">
        <h1 className="text-4xl text-white">Active Pools</h1>
        <div className="w-full grid grid-cols-3 gap-7 mt-16">
          <Card
            image="pool1.jpeg"
            title={"Win a ticket"}
            desc={"This will be the best prize of the world"}
            buttonlabel={"Enter the pool"}
            path="/"
          />
          <input
            placeholder="Ingresar monto a depositar"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button style={{ backgroundColor: "red" }} onClick={deposit}>
            Join the pool
          </button>
          <Card
            image="bored.jpg"
            title={"Win a ticket"}
            desc={"This will be the best prize of the world"}
            buttonlabel={"Enter the pool"}
            path="/"
          />
          <Card
            image="pool2.jpeg"
            title={"Win a ticket"}
            desc={"This will be the best prize of the world"}
            buttonlabel={"Enter the pool"}
            path="/"
          />
        </div>
      </div>
    </Layout>
  );
}
1;

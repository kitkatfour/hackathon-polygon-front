import { useState } from "react";
import { useProvider, useContract, useSigner, useAccount } from "wagmi";
import Card from "../components/Card";
import abi from "../contracts/PrizePool.json";
import erc20abi from "../contracts/ERC20ABI.json";
import Layout from "../components/Layout";
import { ethers } from "ethers";

export default function Home() {
  const [amount, setAmount] = useState();
  // const provider = useProvider();
  // const { address, isConnected } = useAccount();

  const { data: signer } = useSigner();

  // Mumbai PrizePool contract address
  const mumbaiContractAddress = "0x26e507ce8ce828abc7fc986c8a19f4354d5b8cd2";

  // AAVE Mumbai token address
  const controlledToken = "0x74c873c719866a650F151A9fBF0cB5b5c6315906";

  const wooyPoolContract = useContract({
    addressOrName: mumbaiContractAddress,
    contractInterface: abi,
    signerOrProvider: signer,
  });

  const mumbaiAaveContract = useContract({
    addressOrName: controlledToken,
    contractInterface: erc20abi,
    signerOrProvider: signer,
  });

  const deposit = async () => {
    // const wooyPoolContract = new ethers.Contract(
    //   mumbaiContractAddress,
    //   abi,
    //   provider
    // );
    const address = await signer.getAddress();

    const parsedAmount = ethers.utils.parseUnits(amount);

    const approveTx = await mumbaiAaveContract.approve(
      mumbaiContractAddress,
      parsedAmount
    );
    console.log(approveTx, "aprobacion");
    const aTx = await approveTx.wait();
    console.log(aTx, "await tx");

    const tx = await wooyPoolContract.depositTo(
      address,
      parsedAmount,
      controlledToken,
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

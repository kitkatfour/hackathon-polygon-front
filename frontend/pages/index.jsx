import Card from "../components/Card";
import abi from "../contracts/poolTogetherV3ABI.json";
import { useProvider } from "wagmi";

import Layout from "../components/Layout";
import { ethers } from "ethers";

export default function Home() {
  const provider = useProvider();

  const deposit = async () => {
    const mumbaiContractAddres = "0x26e507ce8ce828abc7fc986c8a19f4354d5b8cd2";
    const wooyPoolContract = new ethers.Contract(
      mumbaiContractAddres,
      abi,
      provider
    );

    const tx = await wooyPoolContract.deposit();

    console.log(tx, "asd");
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

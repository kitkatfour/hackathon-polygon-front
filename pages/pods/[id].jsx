import React from "react";
import Layout from "../../components/Layout";
import { InjectedConnector } from 'wagmi/connectors/injected'

import { useRouter } from "next/router";
import { ethers } from "ethers";
import abi from "../../contracts/PODABI.json";

const contractAddress = "0x3e8106c9b28a9ABC35a2Fae90909f82c3822049e";
const contractABI = abi.abi;

const MintNFT = async (poolAddress) => {
  const connector = new InjectedConnector()

  const signer = await connector.getSigner();

  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  const tx = await contract.safeMint(poolAddress);

  const txre = tx.wait();
};

export const NFTCard = () => {
  const router = useRouter();

  const { id } = router.query;

  const nftAddresses = {
    1: {
      poolAddress: "0x4f3Fc13df562c7C06e530b054834a282fc1961f7",
    },
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#343a6c] shadow-lg hover:shadow-2xl hover:bg-[#253082] hover:cursor-pointer transition-all">
      <div className="flex justify-center items-center m-8">
        {id ? (
          <img src={`/nft${id}.png`} alt="" className="h-64 w-64" />
        ) : (
          <img src={`/nft1.png`} alt="" className="h-64 w-64" />
        )}
      </div>
      <div className="px-8 py-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl text-white">Welcome to our community!</h2>
        <hr className="m-2" />
        <p className="text-teal-500 text-2xl">Please claim your PoD</p>
        <button
          onClick={() => MintNFT(nftAddresses[id].poolAddress)}
          className="mt-16 lg:px-16 px-8 py-2 bg-teal-500 rounded-3xl hover:shadow-2xl hover:bg-teal-300 transition-all"
        >
          Mint on Polygon
        </button>
        <p className="mt-8 text-white text-xl">
          This PoD is minted on Polygon Network!
        </p>
      </div>
    </div>
  );
};

const id = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center w-full">
        <NFTCard />
      </div>
    </Layout>
  );
};

export default id;

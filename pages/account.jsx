import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const account = () => {
  return (
    <Layout>
      <div className="px-32 w-full">
        <h1 className="text-6xl text-white font-semibold ">My account</h1>
        <p className="text-white text-xl">ACCOUNT OVERVIEW</p>
        <div className="bg-[#ED652B] rounded-md p-12">
          <p className="text-black text-2xl">DEPOSITS</p>
          <h2 className="text-black text-5xl font-bold mt-2">31,077.86 USDC</h2>
        </div>
      </div>
    </Layout>
  );
};

export default account;

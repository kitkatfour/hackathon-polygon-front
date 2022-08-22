import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const account = () => {
  return (
    <Layout>
      <div className="px-32 w-full flex flex-col gap-4">
        <h1 className="text-6xl text-white font-semibold ">My account</h1>
        <p className="text-white text-xl">ACCOUNT OVERVIEW</p>
        <div className="bg-[#ED652B] rounded-md p-12">
          <p className="text-black text-2xl">DEPOSITS</p>
          <h2 className="text-black text-5xl font-bold mt-2">31,077.86 USDC</h2>
        </div>
        <p className="text-white text-3xl mt-8">Pools I've joined</p>
        <div className="flex gap-4">
          <img src={"/pool1.png"} className="rounded-xl h-40" alt="" />
          <div className="bg-white rounded-xl px-8 py-4 flex gap-20">
            <div>
              <p className="text-[#ED652B] text-xl">ACTIVE</p>
              <p className="text-2xl">Experience the World Cup 2022</p>
              <hr className="divide-y divide-gray my-4" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="mt-4 lg:px-16 px-8 py-2 rounded-md hover:shadow-2xl border-2 border-black transition-all">
                ADD MORE
              </button>
              <Link href={"/withdraw"}>
                <button className="mt-4 lg:px-16 px-8 py-2 rounded-md">
                  <p className="text-[#ED652B] ">Withdraw</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default account;

import React from "react";
import Layout from "../components/Layout";

const withdraw = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center gap-8 h-full w-full">
        <div className="bg-white h-full flex flex-col rounded-md py-24 px-48">
          <h1 className="text-black">Withdraw on Polygon</h1>
          <p className="text-black">More networks and tokens coming soon!</p>
          <input
            type="text"
            placeholder="Enter Amount!"
            className="border-2 rounded-lg px-4 py-2 border-black mt-8"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            // onClick={() => deposit()}
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

export default withdraw;

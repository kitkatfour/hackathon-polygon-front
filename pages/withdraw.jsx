import React from "react";
import Layout from "../components/Layout";
import { Box, Slider } from "@mui/material";
import { useState } from "react";

const withdraw = () => {
  const [amount, setAmount] = useState(0);
  const [percentage, setPercentage] = useState(0);

  return (
    <Layout>
      <div className="flex justify-center items-center gap-8 h-full w-full">
        <div className="bg-white h-full flex flex-col rounded-md py-12 px-8">
          <h1 className="text-black text-2xl">Withdraw!</h1>
          <p className="text-black">More networks and tokens coming soon!</p>
          <input
            type="text"
            placeholder="Enter Amount!"
            className="border-2 rounded-lg px-4 py-2 border-black mt-8"
            onChange={(e) => setAmount(e.target.value)}
          />
          <p className="pt-8 text-2xl">Feeling generous? Donate more!</p>
          <p className="">
            If you prefer donate more percentage or the full amount you'll
            withdraw to the NGO that benefits from our current active pool.
          </p>
          <Box className="py-4">
            <Slider
              aria-label="Restricted values"
              defaultValue={25}
              step={null}
              valueLabelDisplay="auto"
              onChange={(e) => setPercentage(e.target.value)}
              marks={[
                {
                  value: 0,
                  label: "0%",
                },
                {
                  value: 25,
                  label: "25%",
                },
                {
                  value: 50,
                  label: "50%",
                },
                {
                  value: 75,
                  label: "75%",
                },
                {
                  value: 100,
                  label: "100%",
                },
              ]}
            />
          </Box>

          <button
            // onClick={() => withdraw()}
            className="mt-4 lg:px-16 px-8 py-2 bg-[#ED652B] rounded-md hover:shadow-2xl hover:bg-[#fd692a] transition-all"
          >
            WITHDRAW
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default withdraw;

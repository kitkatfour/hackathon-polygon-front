import React from "react";
import Link from "next/link";

//---icons
import WavesIcon from "@mui/icons-material/Waves";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-8">
      <Link href="/">
        <div className="flex text-center items-center gap-2 hover:cursor-pointer rounded-xl bg-[#ED652B] px-12 transition-all">
          <WavesIcon className="text-black" />
          <p className="text-3xl my-1 text-black">Pools</p>
        </div>
      </Link>
      <Link href="/pods">
        <div className="flex text-center items-center gap-2 hover:cursor-pointer rounded-xl bg-[#ED652B] px-12 transition-all">
          <ColorLensIcon className="text-black" />
          <p className="text-3xl my-1 text-black">NFTs</p>
        </div>
      </Link>
      <Link href="/account">
        <div className="flex text-center items-center gap-2 hover:cursor-pointer rounded-xl bg-[#ED652B] px-12 transition-all">
          <AccountCircleIcon className="text-black" />
          <p className="text-3xl my-1 text-black">Account</p>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;

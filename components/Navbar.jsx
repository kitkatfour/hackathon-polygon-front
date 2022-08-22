import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="px-4 flex justify-between">
      <Image src="/wooylogo.svg" width={150} height={150} />
      <div className="py-12">
      <ConnectButton />
      </div>
    </nav>
  );
};

export default Navbar;

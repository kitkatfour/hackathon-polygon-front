import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="py-8 px-4 flex justify-between">
      <Image src="/Wooy-logo.svg" width={150} height={150} />
      <ConnectButton />
    </nav>
  );
};

export default Navbar;

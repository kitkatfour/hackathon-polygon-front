import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="container mx-auto min-h-screen px-20">
      <Navbar />
      <main className="flex mt-16 h-full">
        <SideBar />
        {props.children}
      </main>
    </div>
  );
};

export default Layout;

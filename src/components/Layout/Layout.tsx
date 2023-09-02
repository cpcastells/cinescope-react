import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../NavBar/NavBar";

const Layout = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center max-w-screen m-auto">
      <Header />
      <Outlet />
      <Navbar />
    </div>
  );
};

export default Layout;

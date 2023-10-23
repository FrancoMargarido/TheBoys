import React from "react";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Home from "../../pages/home/Home";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div style={{ height: "10vh" }}>
        <Nav />
      </div>
      <div style={{ minHeight: "70vh" }}>
        <Outlet />
      </div>
      <div style={{ height: "10vh" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

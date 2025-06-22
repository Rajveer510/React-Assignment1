import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;

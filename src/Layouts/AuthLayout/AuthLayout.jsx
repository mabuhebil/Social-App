import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../componets/Layout/Footer/Footer";
import NavBar from "../../componets/Layout/NavBar/NavBar";

export default function AuthLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

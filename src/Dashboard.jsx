import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="relative bg-zinc-50 min-h-screen w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Dashboard;

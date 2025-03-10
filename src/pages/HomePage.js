import React from "react";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const singIn = false;
  return (
    <>
      {singIn ? (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Home />
        </div>
      ) : (
        <>
          {" "}
          <Navbar />
          <LandingPage />
        </>
      )}
    </>
  );
};

export default HomePage;

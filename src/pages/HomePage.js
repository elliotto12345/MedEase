import React from "react";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const singIn = true;
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

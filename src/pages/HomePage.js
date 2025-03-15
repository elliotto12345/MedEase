import React from "react";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const HomePage = () => {
  const singIn = false;
  return (
    <>
      {singIn ? (
        // <div style={{ display: "flex" , flexDirection: "row"}}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "stretch" }}>
            <Sidebar />
            <Home />
          </div>
          <Footer />
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

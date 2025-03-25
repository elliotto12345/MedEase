import React from "react";
import DocHome from "../components/DocHome";
import Footer from "../components/Footer";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const singIn = true;

  const doctor = true;
  return (
    <>
      {singIn ? (
        // <div style={{ display: "flex" , flexDirection: "row"}}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "stretch" }}>
            <Sidebar />
            {doctor ? <DocHome /> : <Home />}
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

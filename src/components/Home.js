import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import auth functions
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(""); // Store user's full name

  useEffect(() => {
    const auth = getAuth(); // Get Firebase auth instance

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is logged in, fetch their data from Firestore
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userDocRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            setUserName(`${userData.firstName} ${userData.lastName}`);
          } else {
            console.log("User data not found in Firestore!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        // No user is logged in
        setUserName("Guest");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const currentDate = new Date()
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, " - ");

  return (
    <div className="home">
      <div className="welcome-bar">
        <div className="welcome-text">
          <span>Welcome</span>
          <img
            src={process.env.PUBLIC_URL + "/assets/So So (1).png"}
            alt="Welcome"
            className="hand-icon"
          />
        </div>
        <div className="date-display">
          <img
            src={process.env.PUBLIC_URL + "/assets/Calendar.png"}
            alt="Calendar"
            className="calendar-icon"
          />
          <span>{currentDate}</span>
        </div>
      </div>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hello {userName}</h1>
          <p>
            We are committed to prioritising your health. Remember staying
            healthy is a step away from sickness. Book an appointment now to
            know your medical status.
          </p>
          <button className="book-button">Book Appointment</button>
        </div>
        <div className="hero-image">
          <img
            src={process.env.PUBLIC_URL + "/assets/stet1.png"}
            alt="Stethoscope"
          />
        </div>
      </section>

      <div className="features">
        <Link to="/sessions">
          <div className="feature-card">
            <img
              src={process.env.PUBLIC_URL + "/assets/Health Book.png"}
              alt="Sessions"
            />
            <h3>My Sessions</h3>
            <p>Get to know your appointment schedules</p>
          </div>
        </Link>

        <div className="feature-card">
          <img
            src={process.env.PUBLIC_URL + "/assets/Consultation.png"}
            alt="Consultation"
          />
          <h3>Request Consultation</h3>
          <p>Talk to a specialist</p>
        </div>

        <div 
          className="feature-card" 
          onClick={() => navigate("/Pharmacy")} 
          style={{ cursor: "pointer" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/Pharmacy Shop.png"}
            alt="Pharmacy"
          />
          <h3>Pharmacy</h3>
          <p>Order drugs and make payments online</p>
        </div>

        <div className="feature-card">
          <img
            src={process.env.PUBLIC_URL + "/assets/Cashbook.png"}
            alt="Receipts"
          />
          <h3>Receipts</h3>
          <p>Find all your receipts here</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

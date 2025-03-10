import React from "react";
import "./LandingPage.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="landing-page">
      <div className="about">
        <div className="desc">
          <div className="left">
            <p className="large">
              Med<span style={{ color: "purple" }}>Ease</span> your way to{" "}
              <br /> <span style={{ color: "purple" }}>healthier life</span>
            </p>
            <p style={{ color: "rgb(90, 90, 90)" }}>
              Where we serve you with the best of Medical Advice and Always
              there to Assist
            </p>
            <button>Get Started</button>
          </div>
          <div className="image">
            <img src="/assets/about.png" alt="about" />
          </div>
        </div>
        <div className="desc-text">
          <p>
            We are committed in assisting you get <br /> connected to any
            Healthcare Specialists all in a <br /> single system
          </p>
        </div>
      </div>
      <div className="service">
        <p className="header"> What you get when you register with us?</p>
        <div className="cards">
          <div className="card">
            <img src="/assets/Icon1.png" alt="1" />
            <h1>Community Membership</h1>
            <p>Get registered and become part of our big community</p>
          </div>
          <div className="card">
            <img src="/assets/Icon2.png" alt="1" />
            <h1>Appointment Bookings</h1>
            <p>
              {" "}
              Our website allows our patients book special appointment with our
              healthcare personnels
            </p>
          </div>
          <div className="card">
            <img src="/assets/Icon3.png" alt="1" />
            <h1>Chat Messaging</h1>
            <p>
              {" "}
              Our app has been designed to allow patients send dirct messages to
              our personnels and get insatant feedback
            </p>
          </div>
        </div>
        <div className="info">
          <div className="image">
            <img src="/assets/services.png" alt="services" />
          </div>
          <div className="right">
            <p>
              Get Registered with us and Schedule <br /> appointments with our
              best Healthcare <br /> Personnels
            </p>
            <p>
              Get registered with us and schedule appointments with our best
              healthcare professionals. Experience seamless booking, secure data
              handling, and 24/7 access to your medical needs. Our platform
              ensures your privacy with encrypted data and compliance with
              healthcare regulations. Trust our expert team for personalized
              care and timely consultations. Book anytime, anywhere, with just a
              few clicks. Your health and safety are our top priorities. Join us
              today and take the first step toward better healthcare. We’re here
              for you, always.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="dashboard">
          <div className="text">
            <p>Helping our patients</p>
            <p>Connect to Medical Personnel</p>
            <p>Making Healthcare appointnmenst easy and accessible</p>
          </div>
          <div className="stats">
            <div className="one-row">
              <div className="stat">
                <img src="/assets/Icon4.png" alt="4" />
                <div className="numbers">
                  <p className="figure"> 2,245,341</p>
                  <p className="group">Members</p>
                </div>
              </div>
              <div className="stat">
                <img src="/assets/Icon7.png" alt="4" />
                <div className="numbers">
                  <p className="figure">46, 328</p>
                  <p className="group">Clubs</p>
                </div>
              </div>
            </div>
            <div className="one-row">
              <div className="stat">
                <img src="/assets/Icon5.png" alt="4" />
                <div className="numbers">
                  <p className="figure">828, 867</p>
                  <p className="group">Event Bookings</p>
                </div>
              </div>
              <div className="stat">
                <img src="/assets/Icon6.png" alt="4" />
                <div className="numbers">
                  <p className="figure"> 1,926,436</p>
                  <p className="group">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="privacy-policy">
          <div className="image">
            <img src="/assets/data.png" alt="data privacy" />
          </div>

          <div className="write-up">
            <p>
              {" "}
              All your personal data are safe <br />
              with us
            </p>
            <p>
              Your privacy is our priority. All data is encrypted and securely
              stored. We comply with healthcare regulations like HIPAA/GDPR.
              Access is restricted to authorized users only. Regular security
              audits ensure ongoing protection. Multi-factor authentication adds
              an extra layer of safety. Your information is safe with us,
              always.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="demo">
        <p> Send Us An E-mail And Try Our New App Demo</p>
        <button>
          Get a Demo <img src="/assets/Right.png" alt="rights" />{" "}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

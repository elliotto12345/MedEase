import React from "react";
import "./Footer.css";

const Footer = () => {
  const signIn = true;
  return (
    <div className="footer">
      <div className={`bottom ${signIn ? "signIn-bg" : "signOut-bg"}`}>
        <div className="column-one">
          <p>
            Copyright © 2025 MedEase ltd. <br />
            All rights reserved
          </p>
          <img src="/assets/social-links.png" alt="social links" />
        </div>
        <div className="column-two">
          <div className="left">
            <p>Company</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>Pricing</p>
            <p>Testimonials</p>
          </div>
          <div className="right">
            <p>Support</p>
            <p>Help Center</p>
            <p>Terms of Service</p>
            <p>Legal</p>
            <p>Privacy Policy</p>
            <p>Status</p>
          </div>
        </div>
        <div className="column-three">
          <p>Stay up to date</p>
          <div
            className={`input ${
              signIn ? "signIn-input-color" : "signOut-input-color"
            }`}
          >
            <input type="text" />
            <img src="/assets/send.png" alt="send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

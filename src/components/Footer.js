import React from "react";
import "./Footer.css";

const Footer = () => {
  const signIn = true;
  return (
    <div className="footer">
      <div className={`bottom ${signIn ? "signIn-bg" : "signOut-bg"}`}>
        <div className="column-one">
          <p>
            Copyright © 2025 MedEase Ltd. <br />
            All rights reserved
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <div className="social-icon facebook">f</div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <div className="social-icon twitter">𝕏</div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <div className="social-icon instagram">Ig</div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <div className="social-icon linkedin">in</div>
            </a>
          </div>
        </div>

        <div className="column-two">
          <div className="left">
            <p>Company</p>
            <a href="#about">About Us</a>
            <a href="/">Blog</a>
            <a href="#contact">Contact Us</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonial">Testimonials</a>
          </div>
          <div className="right">
            <p>Support</p>
            <a href="#help">Help Center</a>
            <a href="#terms">Terms of Service</a>
            <a href="#legal">Legal</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#status">Status</a>
          </div>
        </div>

        <div className="column-three">
          <p>Stay up to date</p>
          <div
            className={`input ${signIn ? "signIn-input-color" : "signOut-input-color"}`}
          >
            <input type="text" placeholder="Enter your email" />
            <img src="/assets/send.png" alt="Send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

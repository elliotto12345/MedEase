import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="demo">
        <p> Send Us An E-mail And Try Our New App Demo</p>
        <button>
          Get a Demo <img src="/assets/Right.png" alt="rights" />{" "}
        </button>
      </div>
      <div className="bottom">
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
          <div className="input">
            <input type="text" />
            <img src="/assets/send.png" alt="send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

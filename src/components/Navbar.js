import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          {/* <p>
            Med<span style={{ color: "purple" }}>Ease</span>
          </p> */}
          <img
            src="/assets/MedEaseLogo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Service</Link>
          </li>
          <li>
            <Link to="/">Testimonial</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="status">
        <Link to="/signup">
          <button className="sign-up">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="log-in">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

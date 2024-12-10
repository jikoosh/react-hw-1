import React from "react";
import "../styles/Header.css";
import logo from "../assets/icons/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="." />
      </div>
      <nav className="nav">
        <a className="nav-item">Features</a>
        <a className="nav-item">Pricing</a>
        <a className="nav-item">Resources</a>
      </nav>
      <div className="btn">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </header>
  );
};

export default Header;

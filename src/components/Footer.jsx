import React from "react";
import "../styles/Footer.css";
import arrow from "../assets/icons/arrow.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="Started">
        <img src={arrow} alt="." />
        <h1>Get Started Now</h1>
      </div>

      <div className="names">
        <h3>runway</h3>
        <p>Features</p>
        <p>Resources</p>
        <p>Runway</p>
      </div>
    </footer>
  );
};

export default Footer;

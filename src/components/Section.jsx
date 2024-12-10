import React from "react";
import "../styles/Section.css";
import photo from "../assets/imges/photo.png";
import NewBalance from "../assets/icons/NewBalance.svg";
import Google from "../assets/icons/Google.svg";
import IBM from "../assets/icons/IBM.svg";
import Pentagram from "../assets/icons/Pentagram.svg";
import RGA from "../assets/icons/RGA.svg";
import Facebook from "../assets/icons/Facebook.svg";

const Section = () => {
  return (
    <section className="container">
      <h1>Make the Impossible</h1>
      <p className="text-section">
        Create and edit content like never before. Your next generation creative
        toolkit — powered by machine learning.
      </p>
      <div className="buttons">
        <button className="try">Try Runway for free</button>
        <button className="sign-up">Sign up</button>
      </div>
      <div className="screenshot">
        <img src={photo} alt="." />
      </div>

      <div className="ferst">
        <p>Used by creative teams at:</p>
      </div>

      <div className="brands">
        <img src={NewBalance} alt="." />
        <img src={Google} alt="." />
        <img src={IBM} alt="." />
        <img src={Pentagram} alt="." />
        <img src={RGA} alt="." />
        <img src={Facebook} alt="." />
      </div>
    </section>
  );
};

export default Section;

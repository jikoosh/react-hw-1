import React from "react";
import "../styles/Main.css";
import cosmos from "../assets/imges/cosmos.png";

const Main = () => {
  return (
    <main className="main-container">
      <div className="text">Start creating</div>
      <div className="second">
        <h1>Generate Automate Transform Analyze Create</h1>
        <div className="cosmoss">
          <img src={cosmos} alt="." />
        </div>
      </div>
    </main>
  );
};

export default Main;

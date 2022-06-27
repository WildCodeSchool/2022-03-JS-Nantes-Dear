import React from "react";
import "./styles/Bonjour.css";
import logo from "../../assets/dear-logo-white.png";

export default function Bonjour() {
  return (
    <div className="bonjour-connection">
      <div className="div-logo-connection">
        <img className="logo-connection" src={logo} alt="logo Dear blanc" />
      </div>
      <div className="bonjour-container">
        <p className="bonjour-text-connection"> Bonjour</p>
      </div>
    </div>
  );
}

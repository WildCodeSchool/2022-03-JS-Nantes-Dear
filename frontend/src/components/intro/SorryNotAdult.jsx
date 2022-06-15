import React from "react";
import logo from "../../assets/dear-logo-white.png";
import "./styles/SorryNotAdult.css";

function SorryNotAdult() {
  return (
    <div className="div-sorry">
      <div className="div-logo-not-adult">
        <img className="logo-not-adult" src={logo} alt="logo Dear blanc" />
      </div>
      <h2>Désolé...</h2>
      <p>
        Nous sommes navrés, l'appli DEAR s'adresse uniquement à des personnes
        MAJEURES.
      </p>
      <p>Pssst, par contre tu peux nous suivre sur INSTA : dear_officiel_</p>
      <p>Take care.</p>
    </div>
  );
}

export default SorryNotAdult;

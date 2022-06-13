import React from "react";
import logo from "../assets/dearlogo.png";
import Inscription from "../components/Inscription";
import Connexion from "../components/Connexion";
import "../components/componentsCss/Intro.css";

function Intro() {
  return (
    <div className="intro-container">
      <div className="div-logo-intro">
        <img className="logo-intro" src={logo} alt="logo Dear blanc" />
      </div>
      <div className="bienvenue-container">
        <p className="bienvenue-text"> Bienvenue </p>
      </div>
      <div className="buttons-intro">
        <Inscription />
        <Connexion />
      </div>
    </div>
  );
}

export default Intro;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/dear-logo-white.png";
import Registration from "../components/intro/Registration";
import Connection from "../components/intro/Connection";
import "./styles/Intro.css";
import ButtonFACul from "../components/intro/ButtonFACul";

function Intro() {
  return (
    <div className="intro-container">
      <div className="div-logo-intro">
        <img className="logo-intro" src={logo} alt="logo Dear blanc" />
      </div>
      <div className="bienvenue-container">
        <p className="bienvenue-text"> Bienvenue </p>
      </div>
      <div className="description-container">
        <div className="description-text">
          <div className="description-text-first">
            ET SI ON PARLAIT SEXUALITÉ
          </div>
          <div className="description-text-bis">SANS TABOU ? 😇 </div>
        </div>
      </div>
      <div className="buttons-intro">
        <Link to="/introadult">
          <Registration style={{ cursor: "pointer" }} />
        </Link>
        <Link to="/connection">
          <Connection style={{ cursor: "pointer" }} />
        </Link>
      </div>
      <div className="button-facul-intro">
        <Link to="/facul">
          <ButtonFACul style={{ cursor: "pointer" }} />
        </Link>
      </div>
    </div>
  );
}

export default Intro;

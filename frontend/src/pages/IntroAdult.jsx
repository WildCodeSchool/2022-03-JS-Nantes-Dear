import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/dear-logo-white.png";
import Adult from "../components/intro/Adult";
import NotAdult from "../components/intro/NotAdult";
import "./styles/IntroAdult.css";

function IntroAdult() {
  return (
    <div className="intro-adult-container">
      <div className="div-logo-intro">
        <img className="logo-intro-adult" src={logo} alt="logo Dear blanc" />
      </div>
      <h3 className="more18">As-tu plus de 18 ans ?</h3>
      <div className="buttons-intro">
        <Link to="/registration">
          <Adult />
        </Link>
        <Link to="/sorrynotadult">
          <NotAdult />
        </Link>
        <Outlet />
      </div>
    </div>
  );
}

export default IntroAdult;

import React from "react";
import "./styles/Hello.css";
import { Link } from "react-router-dom";
import logo from "../../assets/dear-logo-white.png";
import ButtonGo from "./ButtonGo";

export default function Hello() {
  return (
    <div className="hello-inscription">
      <div className="div-logo-inscription">
        <img className="logo-inscription" src={logo} alt="logo Dear blanc" />
      </div>
      <div className="welcome-container">
        <p className="welcome-text-inscription"> Hello,</p>
      </div>
      <div className="message-welcome-inscription">
        <p className="bienvenue-text-inscription">
          {" "}
          Bienvenue dans la TEAM DEAR!
        </p>
      </div>
      <div className="button-go-inscription">
        <Link to="/home">
          <ButtonGo style={{ cursor: "pointer" }} />
        </Link>
      </div>
    </div>
  );
}

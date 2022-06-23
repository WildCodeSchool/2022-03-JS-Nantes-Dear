import React from "react";
import "./styles/Hello.css";
// eslint-disable-next-line import/no-unresolved
import logo from "../../assets/dear-logo-white.png";

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
    </div>
  );
}

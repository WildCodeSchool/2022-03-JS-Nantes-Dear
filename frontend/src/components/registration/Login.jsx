import React from "react";
import { Link } from "react-router-dom";
import ButtonReturn from "../home/ButtonReturn";
import ButtonContinue from "./ButtonContinue";
import "./styles/Login.css";

function Login() {
  return (
    <div className="div-login">
      <div className="buttonreturn-login">
        <ButtonReturn />
      </div>
      <div className="login">
        <form className="form-login">
          <input
            className="inputPseudo"
            type="pseudo"
            name="pseudo"
            id="pseudo"
            placeholder="supertomate27"
          />
          <input
            className="inputLogPassword"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
          />
          <Link to="/connection/bonjour">
            <ButtonContinue />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

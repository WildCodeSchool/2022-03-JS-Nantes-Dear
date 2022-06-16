import React from "react";
import ButtonContinue from "./ButtonContinue";
import "./styles/Login.css";

function Login() {
  return (
    <div className="login">
      <form className="form-login">
        <input
          className="inputPseudo"
          type="pseudo"
          name="pseudo"
          id="pseudo"
          placeholder="Pseudo"
        />
        <input
          className="inputLogPassword"
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
        />
        <ButtonContinue />
      </form>
    </div>
  );
}

export default Login;

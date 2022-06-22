import React from "react";
import { Link } from "react-router-dom";
import "./styles/Register.css";
import ButtonContinue from "../components/registration/ButtonContinue";

function Register() {
  return (
    <div className="register">
      <div className="register-title">
        <h2>Procédons ensemble à ton inscription</h2>
        <form className="form-register">
          <input
            className="inputEmail"
            type="email"
            name="email"
            id="email"
            placeholder="sophie.durand@gmail.coml"
          />
          <input
            className="inputPassword"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
          />
          <input
            className="inputConfirmPassword"
            type="password"
            name="password"
            id="password"
            placeholder="Confirmation du mot de passe"
          />
          <Link to="/registration/register/codemail">
            <ButtonContinue />
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Register;

import React from "react";
import { Link } from "react-router-dom";
import "./styles/Register.css";
import ButtonContinue from "../components/registration/ButtonContinue";
import ButtonReturn from "../components/home/ButtonReturn";

function Register() {
  return (
    <div className="register">
      <div className="div-arrow-return">
        <ButtonReturn />
      </div>
      <div className="register-title">
        <h3>Procédons ensemble à ton inscription</h3>
        <form className="form-register">
          <input
            className="inputEmail"
            type="email"
            name="email"
            id="email"
            placeholder="Adresse email"
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

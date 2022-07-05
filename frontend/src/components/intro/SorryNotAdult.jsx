import React from "react";
import logo from "../../assets/dear-logo-white.png";
import "./styles/SorryNotAdult.css";
import ButtonReturn from "../home/ButtonReturn";

function SorryNotAdult() {
  return (
    <div className="div-sorry">
      <div className="div-arrow-return">
        <ButtonReturn />
      </div>
      <div className="div-logo-not-adult">
        <img className="logo-not-adult" src={logo} alt="logo Dear blanc" />
      </div>
      <div className="text-sorry">
        <div className="first-bloc">
          <h2 className="sorry-title">Désolé...</h2>
          <p className="text-adult">
            Nous sommes navrés, l'appli DEAR s'adresse uniquement à des
            personnes MAJEURES.
          </p>
        </div>
        <div className="second-bloc">
          <p className="insta-pssst">
            Pssst, par contre tu peux nous suivre sur INSTA : dear_officiel_
          </p>
          <p className="take-care">Take care.</p>
        </div>
      </div>
    </div>
  );
}

export default SorryNotAdult;

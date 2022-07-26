import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/Bonjour.css";
import UserContext from "../../contexts/UserContext";
import logo from "../../assets/dear-logo-white.png";
import ButtonGo from "../registration/ButtonGo";

export default function Bonjour() {
  const { register } = useContext(UserContext);

  return (
    <div className="bonjour-connection">
      <div className="div-logo-connection">
        <img className="logo-connection" src={logo} alt="logo Dear blanc" />
      </div>
      <div className="bonjour-container">
        <p className="bonjour-text-connection"> Bonjour {register.pseudo}</p>
      </div>
      <div className="button-go-connection">
        <Link to="/home">
          <ButtonGo />
        </Link>
      </div>
    </div>
  );
}

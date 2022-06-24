import React from "react";
import Login from "../components/registration/Login";
import ButtonReturn from "../components/home/ButtonReturn";
import "./styles/Connection.css";

export default function Registration() {
  return (
    <div className="div-connection">
      <div className="bloc-registration">
        <ButtonReturn />
        <Login />
      </div>
    </div>
  );
}

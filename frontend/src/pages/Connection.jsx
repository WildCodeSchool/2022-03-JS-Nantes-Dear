import ButtonReturn from "@components/home/ButtonReturn";
import React from "react";
import Login from "./Login";
import "./styles/Connection.css";

export default function Registration() {
  return (
    <div className="div-connection">
      <ButtonReturn />
      <div className="bloc-registration">
        <Login />
      </div>
    </div>
  );
}

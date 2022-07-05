import React from "react";
import "./styles/Registration.css";
import CardPseudo from "../components/registration/CardPseudo";
import ButtonReturn from "../components/home/ButtonReturn";

export default function Registration() {
  return (
    <div className="div-registration">
      <div className="/bloc-registration">
        <ButtonReturn />
        <CardPseudo />
      </div>
    </div>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";
import "./styles/Registration.css";
import CardPseudo from "../components/registration/CardPseudo";
import ButtonReturn from "../components/home/ButtonReturn";

export default function Registration() {
  return (
    <div className="/bloc-registration">
      <ButtonReturn />
      <CardPseudo />
      <Outlet />
    </div>
  );
}

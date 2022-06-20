import React from "react";
import { Outlet } from "react-router-dom";
import "./styles/Registration.css";
import CardPseudo from "../components/registration/CardPseudo";

export default function Registration() {
  return (
    <div className="/bloc-registration">
      <CardPseudo />
      <Outlet />
    </div>
  );
}

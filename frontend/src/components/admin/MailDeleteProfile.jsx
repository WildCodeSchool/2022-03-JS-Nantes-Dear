/* eslint-disable prettier/prettier */
import React from "react";
import ButtonReturnPurple from "./ButtonReturnPurple";
import ButtonMailSend from "./ButtonMailSend";
import "./styles/MailDeleteProfile.css";

function MailDeleteProfile() {
  return (
    <div className="container-page-mail-delete-profile">
      <div className="maildeleteprofile">
        <ButtonReturnPurple />
        <h1 className="head-tilte-maildeleteprofile">Les utilisateurs</h1>
        <h2 className="head-subtilte-maildeleteprofile">
          Mail de suppression de profil
        </h2>
      </div>
      <div className="subtilte-maildeleteprofile">
        <h1 className="subtilte-maildeleteprofile">
          Envoie Mail Automatique :
        </h1>
        <p className="subtilte-mail-delete-profile">
          {" "}
          Bonjour "PetitFenouil10"
        </p>
        <p className="subtilte-mail-delete-profile"> Blablabla</p>
        <p className="subtilte-mail-delete-profile">Blablabla</p>
      </div>
      <div className="buttons-maildeleteprofile">
        <ButtonMailSend />
      </div>
    </div>
  );
}

export default MailDeleteProfile;

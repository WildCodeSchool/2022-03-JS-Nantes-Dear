/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import ButtonReturnPurple from "./ButtonReturnPurple";
import ButtonMailSend from "./ButtonMailSend";
import "./styles/MailDeleteProfile.css";

function MailDeleteProfile() {
  const [message, setMessage] = useState("");

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
          Envoie Mail :
        </h1>
        <form className="contactuser" htmlFor="sendsorrymail">
          <label className="contactuserform" htmlFor="sendsorrymail">
            <textarea
              className="inputuserform"
              type="content"
              name="content"
              id="content"
              placeholder="Bonjour c'est la team DEAR,"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div className="button-maildeleteprofile">
        <ButtonMailSend />
      </div>
    </div>
  );
}

export default MailDeleteProfile;

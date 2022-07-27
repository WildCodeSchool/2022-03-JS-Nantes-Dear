import React from "react";
import ButtonReturnPurple from "./ButtonReturnPurple";
import ButtonYesProfileDelete from "./ButtonYesProfileDelete";
import "./styles/DeleteProfile.css";

function DeleteProfile() {
  return (
    <div className="container-page-delete-profile">
      <div className="deleteprofile">
        <ButtonReturnPurple />
        <h1 className="head-tilte-deleteprofile">Les utilisateurs</h1>
        <h2 className="head-subtilte-deleteprofile">Suppression de profil</h2>
      </div>
      <div className="subtilte-deleteprofile">
        <h1 className="subtilte-deleteprofile">Supprimer le profil ?</h1>
        <p className="subtilte-delete-profile">
          {" "}
          La suppression du compte est définitive.
        </p>
        <p className="subtilte-delete-profile">
          {" "}
          L'utilisateur n'aura plus accès à son compte. Ces données seront
          effacées de la base de données.
        </p>
      </div>
      <div className="buttons-yesdeleteprofile">
        <ButtonYesProfileDelete />
      </div>
    </div>
  );
}

export default DeleteProfile;

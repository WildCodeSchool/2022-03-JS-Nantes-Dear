import React from "react";
import ButtonMailDelete from "./ButtonMailDelete";
import ButtonProfileDelete from "./ButtonProfileDelete";
import "./styles/UserDelete.css";

function UserDelete() {
  return (
    <div className="container-page-user-delete">
      <div className="userpagedelete">
        <h1 className="head-tilte-userpageactivities">Les utilisateurs</h1>
        <h2 className="head-subtilte-userpageactivities">Suppresion profil</h2>
      </div>
      <div className="subtilte-useruserpageadelete">
        <h1 className="subtilte-userpage-delete">
          Supprimer le profil de "Petitfenouil10":
        </h1>
        <p className="subtilte-userpage-delete">
          {" "}
          Le profil de "Petitfenouil10" sera définitivement supprimé.
        </p>
        <p className="subtilte-userpage-delete">
          {" "}
          "Petitfenouil10" n'aura plus accès à son compte et recevra un mail
          pour justifier le choix de l'équipe à stopper son accès.
        </p>
        <p className="subtilte-userpage-delete">
          Seule les publications, commentaires qui ont été modérées de
          "Petitfenouil10" ont été supprimées au sein de l'application
        </p>
      </div>
      <div className="buttons-userpagedelete">
        <ButtonMailDelete />
        <ButtonProfileDelete />
      </div>
    </div>
  );
}

export default UserDelete;

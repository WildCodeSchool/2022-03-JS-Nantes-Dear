import React from "react";
import ButtonComments from "./ButtonComments";
import ButtonPublications from "./ButtonPublications";
import "./styles/UserActivities.css";

function UserActivities() {

  return (
    <div className="container-page-user-activities">
      <div className="userpageactivities">
        <h1 className="head-tilte-userpageactivities">Les utilisateurs</h1>
        <h2 className="head-subtilte-userpageactivities">Activités</h2>
      </div>
      <div className="subtilte-userpageacitivities">
        <h1 className="subtilte-userpage">Toute l'activité de :</h1>
      </div>
      <div className="buttons-userpageacitivities">
        <ButtonPublications />
        <ButtonComments />
      </div>
    </div>
  );
}

export default UserActivities;

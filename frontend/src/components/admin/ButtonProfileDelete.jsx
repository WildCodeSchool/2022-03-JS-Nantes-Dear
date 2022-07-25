import React from "react";
import "./styles/ButtonProfileDelete.css";

function ButtonProfileDelete() {
  return (
    <div className="containbuttonprofiledelete">
      <button
        type="submit"
        className="buttonprofiledelete"
        style={{ cursor: "pointer" }}
      >
        <h3>Je supprime le profil de l'utilisateur</h3>
      </button>
    </div>
  );
}

export default ButtonProfileDelete;

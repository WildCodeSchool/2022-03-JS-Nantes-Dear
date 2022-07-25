import React from "react";
import "./styles/ButtonRechercher.css";

function ButtonRechercher() {
  return (
    <div className="containbuttonrechercher">
      <button
        type="submit"
        className="buttonrechercher"
        style={{ cursor: "pointer" }}
      >
        <h3>Rechercher</h3>
      </button>
    </div>
  );
}

export default ButtonRechercher;

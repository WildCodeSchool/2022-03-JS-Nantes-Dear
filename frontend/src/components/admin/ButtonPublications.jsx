import React from "react";
import "./styles/ButtonPublications.css";

function ButtonPublications() {
  return (
    <div className="containbuttonpublicationuser">
      <button
        type="submit"
        className="buttonpublicationsuser"
        style={{ cursor: "pointer" }}
      >
        <h3>Publications</h3>
      </button>
    </div>
  );
}

export default ButtonPublications;

import React from "react";
import "./styles/ButtonComments.css";

function ButtonComments() {
  return (
    <div className="containbuttoncomments">
      <button
        type="submit"
        className="buttoncommentsuser"
        style={{ cursor: "pointer" }}
      >
        <h3>Commentaires</h3>
      </button>
    </div>
  );
}

export default ButtonComments;

import React from "react";
import "./styles/ButtonMailDelete.css";

function ButtonMailDelete() {
  return (
    <div className="containbuttonmaildelete">
      <button
        type="submit"
        className="buttonmaildelete"
        style={{ cursor: "pointer" }}
      >
        <h3>Envoyer le mail</h3>
      </button>
    </div>
  );
}

export default ButtonMailDelete;

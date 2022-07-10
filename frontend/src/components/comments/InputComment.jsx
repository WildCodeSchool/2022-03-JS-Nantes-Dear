import React from "react";
import "./styles/InputComment.css";

function InputComment() {
  return (
    <div className="container-inputcomment">
      <input className="input-comment" type="text" placeholder="Répondre..." />
      <button className="go-button" type="button">
        GO
      </button>
    </div>
  );
}

export default InputComment;

/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import "./styles/MyPersonalDatas.css";

function MyPersonalDatas() {
  return (
    <div className="container-pseudo">
      <form>
        <label htmlFor="namepseudo">
          Nouveau Pseudo :
          <input className="inputpseudo" type="text" name="name" />
        </label>
        <div className="container-modify">
          <button
            className="modify-button"
            style={{ cursor: "pointer" }}
            type="button"
          >
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyPersonalDatas;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/CardPseudo.css";
import ButtonContinue from "./ButtonContinue";
import ProgressBar from "./ProgressBar";
import UserContext from "../../contexts/UserContext";

export default function CardPseudo() {
  const { register, setRegister } = useContext(UserContext);

  return (
    <div className="bloc-card-pseudo">
      <ProgressBar />

      <div className="title-card">
        <h1>Procédons ensemble à ton inscription</h1>
        <h2>PSEUDO ET ÂGE</h2>
        <h3>Et oui, ici tout est anonyme</h3>
      </div>
      <div className="bloc-pseudo">
        <form className="form-pseudo">
          <label className="pseudoform" htmlFor="pseudo">
            <h2 className="stringform">Pseudo</h2>
            <input
              className="inputformpseudo"
              id="pseudo"
              type="text"
              name="pseudo"
              value={register.pseudo}
              placeholder="Indique ton pseudo"
              onChange={(e) =>
                setRegister({ ...register, pseudo: e.target.value })
              }
            />
          </label>
          <h2 className="stringform">Ma tranche d'âge</h2>
          <select
            className="option-age"
            id="share-select"
            value={register.age}
            onChange={(e) => setRegister({ age: e.target.value })}
          >
            <option value="">--Choisir une tranche d'âge--</option>
            <option value="18-25">18 - 25 ans</option>
            <option value="26-35">26 - 35 ans</option>
            <option value="36-45">36 - 45 ans</option>
            <option value="45+">45 ans et +</option>
          </select>
          <button className="inputformsubmit" type="button">
            Valider
          </button>
        </form>
      </div>
      <div className="button-continue">
        <Link to="/registration/register">
          <ButtonContinue />
        </Link>
      </div>
    </div>
  );
}

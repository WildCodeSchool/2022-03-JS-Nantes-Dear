import React, { useContext } from "react";
import "./styles/CardPseudo.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import ButtonContinue from "./ButtonContinue";
import ButtonReturn from "../home/ButtonReturn";
import UserContext from "../../contexts/UserContext";

export default function CardPseudo() {
  const { register, setRegister } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!register.pseudo || !register.age) {
      swal({
        title: "error!",
        text: "Merci de renseigner un pseudo et une tranche d'âge",
        icon: "error",
        confirmButtonText: "Parfait !!",
      });
    } else {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/users/pseudo?pseudo=${
            register.pseudo
          }`
        )

        .then(() => navigate("/registration/register", { replace: true }))

        .catch(() => {
          swal({
            title: "error!",
            text: "Ce pseudo existe déjà",
            icon: "error",
            confirmButtonText: "Ok je change",
          });
        });
    }
  };

  return (
    <div className="bloc-card-pseudo">
      <div className="pseudoreturnarrow">
        <ButtonReturn />
      </div>
      <div className="pseudo-progressbar">
        <ProgressBar color="white" width="80vw" value={33} max={100} />
      </div>
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
            onChange={(e) => setRegister({ ...register, age: e.target.value })}
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
        <ButtonContinue handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

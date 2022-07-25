import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/GoodConduct.css";
import ProgressBar from "./ProgressBar";
import logo from "../../assets/dear-logo-white.png";

function GoodConduct() {
  const ref = useRef(null);
  const [disabled, setDisabled] = useState(false);

  const handleClick = (e) => {
    if (ref.current.checked) {
      setDisabled(true);
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="good-conduct">
      <div className="goodconduct-progressbar">
        <ProgressBar color="white" width="80vw" value={90} max={100} />
      </div>
      <div className="div-logo-conduct">
        <img className="logo-conduct" src={logo} alt="logo Dear blanc" />
      </div>
      <div className="conduct-title-first">
        <h2>Notre souhait :</h2>
        <div className="conduct-text">
          <p>
            En tant que futur membre de DEAR, tu peux exprimer tes pensées
            <span> librement</span> et échanger avec des personnes dans le{" "}
            <span>repect</span> et la
            <span> bienveillance</span>. Peu importe qui tu es et d’ou tu viens,
            ce qui compte
            <span> c’est ce que tu dis !</span>
          </p>
          <p>
            Pour s’assurer que chaque membre DEAR, vive une expérience au{" "}
            <span> TOP</span>, nous avons partagé des règles de{" "}
            <span> bonne confiance </span>
            et de <span> savoir-être !</span>
          </p>
          <p>
            Nous t’encourageons à les <span> lire</span> et à les{" "}
            <span> accepter</span> pour poursuive ton inscription !
          </p>
        </div>
        <div className="conduct-title-secondary">
          <h3>Ne sont pas autorisés :</h3>
        </div>

        <div className="checking">
          <label htmlFor="box">
            <input className="box" ref={ref} id="box" type="checkbox" />
            La Divulgation d’informations personnelles.
          </label>
          <label htmlFor="box">
            <input className="box" ref={ref} id="box" type="checkbox" />
            Le harcèlement moral, les menaces, les discours haineux, la
            diffamation ayant pour but d’intimider ou de porter atteintes aux
            membres de la communauté.
          </label>
          <label htmlFor="box">
            <input className="box" ref={ref} id="box" type="checkbox" />
            La discrimination. Tout post visant une personne ou un groupe sur la
            base de la race, l’origine éthique, le genre, la religion,
            l’orientation sexuelle, ou le handicap.
          </label>
          <label htmlFor="box">
            <input ref={ref} id="box" type="checkbox" />
            Les comportements inutiles. Tout post étant inutilement inamical ou
            hostile envers les autres membres de la communauté DEAR ou un groupe
            de notre communauté.
          </label>
          <label htmlFor="box">
            <input ref={ref} id="box" type="checkbox" />
            Mauvais comportements sexuels. N’est pas autorisé la demande ou le
            partage de contact non sollicités. Le harcèlement sexuel, demande
            agressive de rencontres. Supplier quelqu’un de répondre à une
            demande, spammer les membres dans l’espoir de trouver des rencards.
          </label>
          <label htmlFor="box">
            <input ref={ref} id="box" type="checkbox" />
            Le harcèlement moral, les menaces, les discours haineux, la
            diffamation ayant pour but d’intimider ou de porter atteintes aux
            membres de la communauté.
          </label>
          <label htmlFor="box">
            <input ref={ref} id="box" type="checkbox" />
            Demande de sexe. Tout post à la recherche de sexe, sexfriends ou
            faveurs sexuelles.
          </label>
          <label htmlFor="box">
            <input ref={ref} id="box" type="checkbox" />
            Toute activités illégales non autorisées. Tout post planifiant,
            coordonnant ou exécutant des infractions pénales interdites
            (escroquerie,etc…) ainsi que promouvoir ou inciter d’autres
            personnes à s’engager dans des activités illégales.
          </label>
          <label htmlFor="box">
            <input ref={ref} id="box" type="checkbox" />
            Toutes photos postées montrant des parties génitales, du sperme, des
            sécrétions vaginales, de l’urine et des excréments sont strictement
            interdites.
          </label>
        </div>
        <div className="conduct-conclusion">
          <p>
            En continuant, tu adhères à nos <span>règles</span>, nos{" "}
            <span>conditions d'utilisation </span>
            et notre <span>Politique de confidentialité.</span>
          </p>
        </div>
        <div className="button-accept-all">
          <Link to="hello">
            <button
              className="chart-active"
              type="button"
              disabled={disabled}
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            >
              CONTINUER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GoodConduct;

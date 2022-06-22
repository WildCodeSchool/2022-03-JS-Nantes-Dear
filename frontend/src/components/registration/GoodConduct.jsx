import React, { useState } from "react";
import "./styles/GoodConduct.css";
import logo from "../../assets/dear-logo-white.png";
import Checkbox from "./Checkbox";

function GoodConduct() {
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="good-conduct">
      <div className="div-logo-conduct">
        <img className="logo-conduct" src={logo} alt="logo Dear blanc" />
      </div>
      <div className="conduct-title-first">
        <h2>Notre souhait :</h2>
        <div className="conduct-text">
          <p>
            En tant que futur membre de DEAR, tu peux exprimer tes pensées
            <strong> librement</strong> et échanger avec des personnes dans le{" "}
            <strong>repect</strong> et la
            <strong> bienveillance</strong>. Peu importe qui tu es et d’ou tu
            viens, ce qui compte
            <strong> c’est ce que tu dis !</strong>
          </p>
          <p>
            Pour s’assurer que chaque membre DEAR, vive une expérience au{" "}
            <strong> TOP</strong>, nous avons partagé des règles de{" "}
            <strong> bonne confiance </strong>
            et de <strong> savoir-être !</strong>
          </p>
          <p>
            Nous t’encourageons à les <strong> lire</strong> et à les{" "}
            <strong> accepter</strong> pour poursuive ton inscription !
          </p>
        </div>
        <div className="conduct-title-secondary">
          <h3>Ne sont pas autoriséss :</h3>
        </div>

        <div className="checking">
          <Checkbox
            id="checkbox"
            label="La Divulgation d’informations personnelles."
            value={checked}
            onChange={onChange}
          />
          <Checkbox
            id="checkbox"
            label="Le harcèlement moral, les menaces, les discours
          haineux, la diffamation ayant pour but 
          d’intimider ou de porter atteintes aux membres
          de la communauté."
            value={checked}
            onChange={onChange}
          />
          <Checkbox
            id="checkbox"
            label="La discrimination. Tout post visant une personne
          ou un groupe sur la base de la race, l’origine 
          éthique, le genre, la religion, l’orientation sexuelle,
          ou le handicap."
            value={checked}
            onChange={onChange}
          />
          <Checkbox
            id="checkbox"
            label="Les comportements inutiles. Tout post étant
          inutilement inamical ou hostile envers les 
          autres membres de la communauté DEAR ou 
          un groupe de notre communauté.é."
            value={checked}
            onChange={onChange}
          />
          <Checkbox
            id="checkbox"
            label="Mauvais comportements sexuels. N’est pas
          autorisé la demande ou le partage de contact
          non sollicités. Le harcèlement sexuel, demande
          agressive de rencontres. Supplier quelqu’un de 
          répondre à une demande, spammer les membres
          dans l’espoir de trouver des rencards."
            value={checked}
            onChange={onChange}
          />
          <Checkbox
            id="checkbox"
            label="Le harcèlement moral, les menaces, les discours
          haineux, la diffamation ayant pour but 
          d’intimider ou de porter atteintes aux membres
          de la communauté."
            value={checked}
            onChange={onChange}
          />
          <Checkbox
            id="checkbox"
            label="Demande de sexe. Tout post à la recherche de 
          sexe, sexfriends ou faveurs sexuelles."
            value={checked}
            onChange={onChange}
          />
          <Checkbox
            id="checkbox"
            label="Toute activités illégales non autorisées. Tout
          post planifiant, coordonnant ou exécutant des
          infractions pénales interdites (escroquerie,etc…)
          ainsi que promouvoir ou inciter d’autres personnes
          à s’engager dans des activités illégales."
            value={checked}
            onChange={onChange}
          />
          <Checkbox
            id="checkbox"
            label="Toutes photos postées montrant des parties 
          génitales, du spermes, des sécrétions vaginales,
          de l’urine et des excréments sont strictement 
          interdites."
            value={checked}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default GoodConduct;

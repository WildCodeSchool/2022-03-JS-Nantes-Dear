import { useState } from "react";
import "./styles/NavFilterPub.css";
import filter from "../../assets/filter-blue.png";

export default function NavFilterPub() {
  const [inactive, setInactive] = useState(true);

  const handleShowNav = () => {
    setInactive(!inactive);
  };

  return (
    <nav className="menuResearch">
      <div className="filter-container">
        <button
          className="navfilter"
          type="button"
          style={{ cursor: "pointer" }}
          onClick={handleShowNav}
        >
          <img src={filter} className="logofilter" alt="filter" />
        </button>
      </div>
      <div className={`categorie-container ${inactive ? "inactive" : ""}`}>
        <h4> Catégories </h4>
        <div className="checkbox-container">
          <div className="checkbox">
            <label htmlFor="Amour">
              Amour
              <input type="checkbox" />
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="Bien-être sexuel">
              Bien-être sexuel
              <input type="checkbox" />
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="Non-binaire">
              Non-binaire
              <input type="checkbox" />
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="Pénis">
              Pénis
              <input type="checkbox" />
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="Polyamour">
              Polyamour
              <input type="checkbox" />
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="Relation Sexuelle">
              Relation Sexuelle
              <input type="checkbox" />
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="Témoignage">
              Témoignage
              <input type="checkbox" />
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="Vagin">
              Vagin
              <input type="checkbox" />
            </label>
          </div>
        </div>
        <div className="confirm-filter-container">
          <button id="confirmFilter" type="button" onClick={handleShowNav}>
            VALIDER LES FILTRES
          </button>
        </div>
      </div>
    </nav>
  );
}

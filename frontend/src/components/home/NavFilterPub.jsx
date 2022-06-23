import { useState } from "react";
import "./styles/NavFilterPub.css";
import filter from "../../assets/filter-black.png";

export default function NavFilterPub() {
  const [inactive, setInactive] = useState(false);

  const handleShowNav = () => {
    setInactive(!inactive);
  };

  return (
    <nav className="menuResearch">
      <div className={`menu ${inactive ? "inactive" : ""}`}>
        <div className="filter-container">
          <button id="navfilter" type="button" onClick={handleShowNav}>
            <img src={filter} alt="filter" />
          </button>
        </div>
        <div className="categorie-container">
          <h4> Catégories </h4>
          <div className="checkbox-container">
            <div className="checkbox">
              <label htmlFor="Chiffres">
                Chiffres clefs
                <input type="checkbox" />
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="Témoignages">
                Témoignages
                <input type="checkbox" />
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="Débat">
                Débat
                <input type="checkbox" />
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="Bien être">
                Bien être sexuel
                <input type="checkbox" />
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="Amour">
                Amour
                <input type="checkbox" />
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="Polyamoure">
                Polyamoure
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
      </div>
    </nav>
  );
}

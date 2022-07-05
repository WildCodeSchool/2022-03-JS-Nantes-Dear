import "./styles/HeaderHome.css";
import { Link } from "react-router-dom";
import logo from "../../assets/dear-logo-blue.png";

export default function HeaderHome() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/home">
          <img className="logo" src={logo} alt="logo-dear-couleur" />
        </Link>
      </div>
      <div className="welcome-text">
        <div className="welcome-container-title">
          <h1 className="title"> HOME </h1>
        </div>
        <div className="welcome-container-subtitle">
          <h4 className="subtitle">
            Viens partager tes expériences et apprendre des autres personnes qui
            t'entourent !
          </h4>
        </div>
      </div>
    </header>
  );
}

import "./styles/HeaderComment.css";
import { Link } from "react-router-dom";
import logo from "../../assets/dear-logo-blue.png";

export default function HeaderComment() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/home">
          <img className="logo" src={logo} alt="logo-dear-couleur" />
        </Link>
      </div>
      <div className="comment-text">
        <div className="comment-container-title">
          <h1 className="title"> COMMENTAIRE </h1>
        </div>
        <div className="comment-container-subtitle">
          <h4 className="subtitle">
            Partager, découvrir, apprendre, comprendre, s'éveiller... Ensemble !
          </h4>
        </div>
      </div>
    </header>
  );
}

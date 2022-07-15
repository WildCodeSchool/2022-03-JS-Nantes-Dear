import "./styles/FooterHome.css";
import { Link } from "react-router-dom";
import logoHome from "../../assets/home.png";
import logoProfile from "../../assets/user.png";
import logoPlus from "../../assets/logo_plus.png";

export default function FooterHome() {
  return (
    <footer className="footerHome">
      <div className="publication-button">
        <Link to="/addpost">
          <img id="logoPlus" src={logoPlus} alt="icône créer publication" />
        </Link>
      </div>
      <div className="logo-footer-container">
        <div className="logo-home-container">
          <Link to="/home">
            <img className="footer-logo-home" src={logoHome} alt="logoHome" />
            <p> Home </p>
          </Link>
        </div>
        <div className="logo-user-container">
          <Link to="/useraccount">
            <img
              className="footer-logo-profile"
              src={logoProfile}
              alt="logoProfile"
            />
            <p> Profil </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

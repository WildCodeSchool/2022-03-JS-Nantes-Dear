import "./styles/FooterHome.css";
import logoHome from "../../assets/home.png";
import logoProfile from "../../assets/user.png";
import logoPlus from "../../assets/logo_plus.png";

export default function FooterHome() {
  return (
    <footer className="footerHome">
      <div className="publication-button">
        <img id="logoPlus" src={logoPlus} alt="icône créer publication" />
      </div>
      <div className="logo-footer-container">
        <div className="logo-home-container">
          <img className="footer-logo" src={logoHome} alt="logoHome" />
          <p> Home </p>
        </div>
        <div className="logo-user-container">
          <img className="footer-logo" src={logoProfile} alt="logoProfile" />
          <p> User </p>
        </div>
      </div>
    </footer>
  );
}

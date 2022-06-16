import "./styles/FooterHome.css";
import logoHome from "../../assets/logo_home.png";
import logoProfile from "../../assets/logo_profile.png";
import logoPlus from "../../assets/logo_plus.png";

export default function FooterHome() {
  return (
    <footer className="footerHome">
      <div className="publication-button">
        <img id="logoPlus" src={logoPlus} alt="icône créer publication" />
      </div>
      <div className="logo-footer-container">
        <img src={logoHome} alt="logoHome" />
        <img src={logoProfile} className="user-logo" alt="logoProfile" />
      </div>
    </footer>
  );
}

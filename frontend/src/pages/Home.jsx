import HeaderHome from "../components/home/HeaderHome";
import ModalHome from "../components/home/ModalHome";
import FooterHome from "../components/home/FooterHome";
import NavFilterPub from "../components/home/NavFilterPub";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="Home-container">
      <HeaderHome />
      <NavFilterPub />
      <div className="Home-Modal">
        <ModalHome />
      </div>
      <FooterHome />
    </div>
  );
}

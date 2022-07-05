import HeaderHome from "../components/home/HeaderHome";
import ModalHome from "../components/home/ModalHome";
import FooterHome from "../components/home/FooterHome";
import NavFilterPub from "../components/home/NavFilterPub";
import "./styles/Home.css";
import FilterSearch from "../components/home/FilterSearch";

export default function Home() {
  return (
    <div className="Home-container">
      <HeaderHome />
      <FilterSearch />
      <NavFilterPub />
      <div className="Home-Modal">
        <ModalHome />
      </div>
      <FooterHome />
    </div>
  );
}

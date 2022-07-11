import HeaderHome from "../components/home/HeaderHome";
import ModalHome from "../components/home/ModalHome";
import FooterHome from "../components/home/FooterHome";
import NavFilterPub from "../components/home/NavFilterPub";
import ButtonLikeDislike from "../components/post/ButtonLikeDislike";
import "./styles/Home.css";
import FilterSearch from "../components/home/FilterSearch";

export default function Home() {
  return (
    <div className="Home-container">
      <HeaderHome />
      <ButtonLikeDislike />
      <FilterSearch />
      <NavFilterPub />
      <div className="Home-Modal">
        <ModalHome />
      </div>
      <FooterHome />
    </div>
  );
}

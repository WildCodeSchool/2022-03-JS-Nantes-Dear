import HeaderHome from "../components/home/HeaderHome";
import ModalHome from "../components/home/ModalHome";

export default function Home() {
  return (
    <div className="Home-container">
      <HeaderHome />
      <div className="Home-Modal">
        <ModalHome />
      </div>
    </div>
  );
}

import HeaderHome from "../components/home/HeaderHome";
import ModalHome from "../components/home/ModalHome";
import FooterHome from "../components/home/FooterHome";
import "./styles/Home.css";
import PostList from "../components/post/CardPost/PostList";

export default function Home() {
  return (
    <div className="Home-container">
      <HeaderHome />
      <PostList />
      <div className="Home-Modal">
        <ModalHome />
      </div>
      <FooterHome />
    </div>
  );
}

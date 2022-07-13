import HeaderHome from "../components/home/HeaderHome";
import ModalHome from "../components/home/ModalHome";
import FooterHome from "../components/home/FooterHome";
import "./styles/Home.css";
import FilterSearch from "../components/home/FilterSearch";
import PostList from "../components/post/CardPost/PostList";

export default function Home() {
  return (
    <div className="Home-container">
      <HeaderHome />
      <FilterSearch />
      <PostList />

      <div className="Home-Modal">
        <ModalHome />
      </div>
      <FooterHome />
    </div>
  );
}

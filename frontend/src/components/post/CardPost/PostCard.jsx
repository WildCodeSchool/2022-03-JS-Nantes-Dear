import "./styles/Postcard.css";
import { propTypes } from "react-bootstrap/esm/Image";
import ButtonLikeDislike from "../ButtonLikeDislike";

function PostCard({ post }) {
  const { user, content, category, postdate } = post;
  // const backgroundColorList = [
  //   "#303364",
  //   "#EC4D4D",
  //   "#A7D1CD",
  //   "#F8C053",
  //   "#A098C9",
  // ];
  // const rand = Math.floor(Math.random() * backgroundColorList.length);
  // const valueColor = backgroundColorList[rand];
  return (
    <div className="postcard">
      <div className="headercard">
        <h2>
          <span className="dateText"> {postdate} 2020-02-12 </span> {user}
          user1100{" "}
        </h2>
        <p> {category} porno </p>
      </div>
      <div className="contentcard">
        <p>{content}</p>
      </div>
      <div className="footercard">
        <ButtonLikeDislike />
      </div>
    </div>
  );
}
PostCard.propTypes = {
  post: propTypes.string,
  user: propTypes.string,
  content: propTypes.string,
  category: propTypes.string,
  postdate: propTypes.instanceOf(Date),
};

PostCard.defaultProps = {
  post: propTypes.string,
  user: propTypes.string,
  content: propTypes.string,
  category: propTypes.string,
  postdate: propTypes.instanceOf(Date),
};

export default PostCard;

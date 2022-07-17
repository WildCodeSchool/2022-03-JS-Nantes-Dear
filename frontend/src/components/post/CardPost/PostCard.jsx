import React from "react";
import "./styles/Postcard.css";
import { propTypes } from "react-bootstrap/esm/Image";
import ButtonLikeDislike from "../ButtonLikeDislike";

function PostCard({ post }) {
  const { userId, content, category, createdAt } = post;
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
          <span className="dateText"> {createdAt}</span> {userId}
        </h2>
        <p> {category}</p>
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
  userId: propTypes.string,
  content: propTypes.string,
  category: propTypes.string,
  // postdate: propTypes.instanceOf(Date),
};
PostCard.defaultProps = {
  post: propTypes.string,
  userId: propTypes.string,
  content: propTypes.string,
  category: propTypes.string,
  // postdate: propTypes.instanceOf(Date),
};
export default PostCard;

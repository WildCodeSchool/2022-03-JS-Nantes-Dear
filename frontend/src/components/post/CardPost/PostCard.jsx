import React from "react";
import "./styles/Postcard.css";
import { propTypes } from "react-bootstrap/esm/Image";
import ButtonLikeDislike from "../ButtonLikeDislike";

function PostCard({ post }) {
  const { pseudo, content, category, postdate } = post;

  return (
    <div className="postcard">
      <div className="headercard">
        <h2>
          <span className="dateText"> {postdate} 2020-02-12 </span> {pseudo}
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
  pseudo: propTypes.string,
  content: propTypes.string,
  category: propTypes.string,
  // postdate: propTypes.instanceOf(Date),
};

PostCard.defaultProps = {
  post: propTypes.string,
  pseudo: propTypes.string,
  content: propTypes.string,
  category: propTypes.string,
  // postdate: propTypes.instanceOf(Date),
};

export default PostCard;

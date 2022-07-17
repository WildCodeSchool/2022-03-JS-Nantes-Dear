import React from "react";
import "./styles/Postcard.css";
import { propTypes } from "react-bootstrap/esm/Image";
import ButtonLikeDislike from "../ButtonLikeDislike";

function PostCard({ post }) {
  const { userId, content, category, createdAt } = post;
  
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
  post: propTypes.shape({
    userId: propTypes.number.isRequired,
    content: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    createdAt: propTypes.string.isRequired,
  });
};

export default PostCard;
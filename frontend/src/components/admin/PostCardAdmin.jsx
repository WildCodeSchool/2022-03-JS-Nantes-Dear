import React from "react";
import "./styles/PostCardAdmin.css";
import propTypes from "prop-types";
import ButtonLikeDislike from "../post/ButtonLikeDislike";

function PostCardAdmin({ post }) {
  const { user, content, category } = post;

  return (
    <div className="postcard">
      <div className="headercard">
        <h2>
          {/* <span className="dateText">
           
          </span> */}
          {user}
        </h2>
        <p>{category}</p>
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

PostCardAdmin.propTypes = {
  post: propTypes.shape({
    user: propTypes.number.isRequired,
    content: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
};

export default PostCardAdmin;

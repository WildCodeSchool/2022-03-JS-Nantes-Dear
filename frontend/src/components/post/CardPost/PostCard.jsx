import React from "react";
import "./styles/Postcard.css";
import propTypes from "prop-types";
import TimeAgo from "javascript-time-ago";
import fr from "javascript-time-ago/locale/fr";
import ReactTimeAgo from "react-time-ago";
import ButtonLikeDislike from "../ButtonLikeDislike";

TimeAgo.addDefaultLocale(fr);
TimeAgo.addLocale(fr);

function PostCard({ post }) {
  const { userId, content, category, createdAt } = post;

  return (
    <div className="postcard">
      <div className="headercard">
        <h2>
          <span className="dateText">
            {" "}
            <ReactTimeAgo date={createdAt} relocale="fr" />{" "}
          </span>
          par user{userId}
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

PostCard.propTypes = {
  post: propTypes.shape({
    userId: propTypes.number.isRequired,
    content: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    createdAt: propTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;

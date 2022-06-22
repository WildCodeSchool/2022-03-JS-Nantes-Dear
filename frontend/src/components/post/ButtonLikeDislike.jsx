import React, { useState } from "react";
import "./styles/ButtonLikeDislike.css";

function ButtonLikeDislike() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const [comment, setComment] = useState(0);

  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDisLikeActive] = useState(false);
  const [commentActive, setCommentActive] = useState(false);

  const likeClick = () => {
    if (likeActive) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setLikeActive(!likeActive);
  };

  const dislikeClick = () => {
    if (dislikeActive) {
      setDisLike(dislike - 1);
    } else {
      setDisLike(dislike + 1);
    }
    setDisLikeActive(!dislikeActive);
  };

  const commentClick = () => {
    if (commentActive) {
      setComment(comment - 1);
    } else {
      setComment(comment + 1);
    }
    setCommentActive(!commentActive);
  };

  return (
    <div className="button-like-dislike-comment">
      <div className="buttondislike">
        <button
          type="button"
          className={`dislike-button ${dislikeActive && "disliked"}`}
          onClick={dislikeClick}
        >
          <span className="dislikes-counter">{`💔 ${dislike}`}</span>
        </button>
      </div>
      <div className="buttonlike">
        <button
          type="button"
          className={`like-button ${likeActive && "liked"}`}
          onClick={likeClick}
        >
          <span className="likes-counter">{`💖 ${like}`}</span>
        </button>
      </div>
      <div className="buttoncomment">
        <button type="button" className="comment-button" onClick={commentClick}>
          <span className="comments-counter">{`💬 ${comment}`}</span>
        </button>
      </div>
    </div>
  );
}

export default ButtonLikeDislike;

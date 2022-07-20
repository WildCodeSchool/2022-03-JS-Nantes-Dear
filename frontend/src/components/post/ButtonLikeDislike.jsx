import React, { useState } from "react";
import "./styles/ButtonLikeDislike.css";

function ButtonLikeDislike() {
  const [like, setLike] = useState(0);

  const [likeActive, setLikeActive] = useState(false);

  const likeClick = () => {
    if (likeActive) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setLikeActive(!likeActive);
  };
  return (
    <div className="button-like-dislike-comment">
      <div className="buttonlike">
        <button
          type="button"
          className={`like-button ${likeActive ? "active" : "inactive"} `}
          onClick={likeClick}
        >
          <div className="icon">
            <svg
              className={`heart-main ${likeActive ? "active" : "inactive"} `}
              viewBox="0 0 512 512"
              width="100"
              title="heart"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </svg>
            <svg
              className={`heart-background ${
                likeActive ? "active" : "inactive"
              } `}
              viewBox="0 0 512 512"
              width="100"
              title="heart"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ButtonLikeDislike;

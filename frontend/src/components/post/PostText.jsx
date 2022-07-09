import { React, useState } from "react";
import "./styles/PostText.css";
import axios from "axios";
import swal from "sweetalert";
import ButtonSuivantPost from "./ButtonSuivantPost";
import PostHeader from "./PostHeader";

function PostText() {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      swal({
        title: "Error!",
        text: "Merci de publier",
        icon: "error",
        confirmButtonText: "parfait",
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/post/postText`,
          { content },
          { withCredentials: true }
        )
        // eslint-disable-next-line no-restricted-syntax
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <div className="div-post-texte">
      <div className="bloc-texte-post">
        <form className="form-post">
          <PostHeader />
          <label className="postform" htmlFor="post">
            <textarea
              className="inputformpost"
              type="content"
              name="content"
              id="content"
              placeholder="Partagez un message, une question, une expérience, un doute... avec la communauté! La sexualité n'est plus un tabou! Ta publication est anonyme."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div className="button-suivant-post">
        <ButtonSuivantPost handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default PostText;

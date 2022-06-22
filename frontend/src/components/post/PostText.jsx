import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/PostText.css";
import ButtonSuivantPost from "./ButtonSuivantPost";

function PostTexte() {
  const [post, setPost] = useState("");

  return (
    <div className="div-post-texte">
      <div className="bloc-texte-post">
        <form className="form-post">
          <label className="postform" htmlFor="post">
            <textarea
              className="inputformpost"
              type="text"
              name="textpost"
              id="textpost"
              placeholder="Partagez un message, une question, une expérience, un doute... avec la communauté! La sexualité n'est plus un tabou! Ta publication est anonyme."
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div className="button-suivant-post">
        <Link to="/editpost/postcategory">
          <ButtonSuivantPost />
        </Link>
      </div>
    </div>
  );
}

export default PostTexte;

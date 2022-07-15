import { React, useState } from "react";
import "./styles/PostText.css";
import axios from "axios";
import swal from "sweetalert";
import ButtonPublierPost from "./ButtonPublierPost";

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
      <div className="title-post-category">
        <h1>À quelle catégorie</h1>
        <h1>appartient ce post?</h1>
      </div>
      <div className="form-post-text">
        <select className="option-category-post" id="share-select">
          <option value="">--Choisir une catégorie--</option>
          <option value="">Témoignage</option>
          <option value="">Bien être sexuel</option>
          <option value="">Amour</option>
          <option value="">Polyamoure</option>
          <option value="">Relation sexuelle</option>
          <option value="">Vulve</option>
          <option value="">Pénis</option>
          <option value="">Non-binaire</option>
        </select>
      </div>
      <div className="bloc-texte-post">
        <h1 className="title-post-message"> Écrit ton message ici :</h1>
        <form className="form-post">
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
      <div className="button-publier-post">
        {/* <Link to="/editpost/postcategory"> */}
        <ButtonPublierPost handleSubmit={handleSubmit} />
        {/* </Link> */}
      </div>
    </div>
  );
}

export default PostText;

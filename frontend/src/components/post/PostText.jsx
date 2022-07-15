import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/PostText.css";
import axios from "axios";
import swal from "sweetalert";
import ButtonPublierPost from "./ButtonPublierPost";

function PostText() {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content || !category) {
      swal({
        title: "Error!",
        text: "Merci de spécifier la categorie et de remplir le contenu",
        icon: "error",
        confirmButtonText: "parfait",
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/post/posttext`,
          { content, category },
          { withCredentials: true }
        )
        .then(() => navigate("/addpost/home", { replace: true }))
        .catch((err) => {
          console.warn(err);
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
        <select
          className="option-category-post"
          id="share-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">--Choisir une catégorie--</option>
          <option value="Témoignage">Témoignage</option>
          <option value="Bien être sexuel">Bien être sexuel</option>
          <option value="Amour">Amour</option>
          <option value="Polyamoure">Polyamoure</option>
          <option value="Relation sexuelle">Relation sexuelle</option>
          <option value="Vulve">Vulve</option>
          <option value="Pénis">Pénis</option>
          <option value="Non-binaire">Non-binaire</option>
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
        <ButtonPublierPost handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default PostText;

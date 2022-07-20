import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/PostText.css";
import axios from "axios";
import swal from "sweetalert";
import ButtonReturnGreen from "./ButtonReturnGreen";
import ButtonPublierPost from "./ButtonPublierPost";

function PostText() {
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/category`)
      .then((res) => setCategories(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content || !categoryId) {
      swal({
        title: "Error!",
        text: "Merci de spécifier la categorie et de publier un post",
        icon: "error",
        confirmButtonText: "parfait",
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/post/posttext`,
          { content, categoryId },
          { withCredentials: true }
        )

        .then(() => navigate("/home", { replace: true }))
        .catch((err) => {
          console.warn(err);
        });
    }
  };

  return (
    <div className="div-post-texte">
      <div className="title-post-category">
        <ButtonReturnGreen />
        <h1>À quelle catégorie</h1>
        <h1>appartient ce post?</h1>
      </div>
      <div className="form-post-text">
        <select
          className="option-category-post"
          name="category"
          id="share-select"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="0">--Choisir une catégorie--</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
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

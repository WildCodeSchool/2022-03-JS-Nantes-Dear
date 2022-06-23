import React, { useState } from "react";
import "./styles/PostCategory.css";
import ButtonPublierPost from "./ButtonPublierPost";

function PostCategory() {
  const [categoryChecked, setCategoryChecked] = useState(false);

  const handleOnChange = () => {
    setCategoryChecked(!categoryChecked);
  };

  return (
    <div className="bloc-post-category">
      <div className="title-post-category">
        <h1>À quelle catégorie</h1>
        <h1>appartient ce post?</h1>
        <h2>Les plus récentes :</h2>
      </div>
      <div className="checkbox-category">
        <div className="checkbox-category-1">
          <input
            type="checkbox"
            id="category-post"
            name="category-post"
            value="Relation sexuelle"
            onChange={handleOnChange}
          />
          Relation sexuelle
        </div>
        <div className="checkbox-category-2">
          <input
            type="checkbox"
            id="category-post"
            name="category-post"
            value="Vulve"
            onChange={handleOnChange}
          />
          Vulve
        </div>
        <div className="checkbox-category-3">
          <input
            type="checkbox"
            id="category-post"
            name="category-post"
            value="Pénis"
            onChange={handleOnChange}
          />
          Pénis
        </div>
        <div className="checkbox-category-4">
          <input
            type="checkbox"
            id="category-post"
            name="category-post"
            value="Non-binaire"
            onChange={handleOnChange}
          />
          Non-binaire
        </div>
        <div className="checkbox-category-5">
          <input
            type="checkbox"
            id="category-post"
            name="category-post"
            value="Autre"
            onChange={handleOnChange}
          />
          Autre
        </div>
      </div>
      <div className="button-publier">
        <ButtonPublierPost />
      </div>
    </div>
  );
}

export default PostCategory;

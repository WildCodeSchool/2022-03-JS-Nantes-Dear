import "./styles/FilterCategories.css";
import propTypes from "prop-types";

function FilterCategories({ category }) {
  return (
    <div className="div-filter-categories">
      <div className="checkbox-category">
        <label htmlFor="Bien-être sexuel">
          {category.name}
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
}
FilterCategories.propTypes = {
  category: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
};

export default FilterCategories;

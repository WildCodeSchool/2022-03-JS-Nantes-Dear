import "./styles/FilterCategories.css";
import propTypes from "prop-types";

function FilterCategories({ category }) {
  return (
    <div className="div-filter-categories">
      <div className="checkbox-category">
        <label htmlFor={`c_${category.id}`}>
          {category.name}
          <input type="checkbox" id={`c_${category.id}`} />
        </label>
      </div>
    </div>
  );
}
FilterCategories.propTypes = {
  category: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  }).isRequired,
};

export default FilterCategories;

import "./styles/User.css";
import propTypes from "prop-types";

function User({ user }) {
  return (
    <div className="user-container">
      <div className="user-title">{user.pseudo}</div>
    </div>
  );
}
User.propTypes = {
  user: propTypes.shape({
    pseudo: propTypes.string.isRequired,
  }).isRequired,
};

export default User;

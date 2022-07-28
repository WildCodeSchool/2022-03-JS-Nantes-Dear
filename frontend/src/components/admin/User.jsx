import "./styles/User.css";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import iconcross from "../../assets/icon-cross.png";
import iconeye from "../../assets/icon-eye.png";

function User({ user }) {
  return (
    <div className="user-container">
      <div className="align-pseudo-pictos">
        <div className="user-title">{user.pseudo}</div>
        <div className="pictos-list-user">
          <Link to="/useractivities">
            <img className="iconeye" src={iconeye} alt="icon-eye" />
          </Link>
          <Link to="/userdelete">
            <img className="iconcross" src={iconcross} alt="icon-cross" />
          </Link>
        </div>
      </div>
    </div>
  );
}
User.propTypes = {
  user: propTypes.shape({
    pseudo: propTypes.string.isRequired,
  }).isRequired,
};

export default User;

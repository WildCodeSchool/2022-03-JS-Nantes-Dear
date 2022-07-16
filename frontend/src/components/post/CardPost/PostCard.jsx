/* eslint-disable camelcase */
import "./styles/Postcard.css";
import propTypes from "prop-types";
import TimeAgo from "javascript-time-ago";
import fr from "javascript-time-ago/locale/fr";
import ReactTimeAgo from "react-time-ago";
import ButtonLikeDislike from "../ButtonLikeDislike";

TimeAgo.addDefaultLocale(fr);
TimeAgo.addLocale(fr);

function PostCard({ post }) {
  const { user_id, content, category_id, created_at } = post;

  // const backgroundColorList = [
  //   "#303364",
  //   "#EC4D4D",
  //   "#A7D1CD",
  //   "#F8C053",
  //   "#A098C9",
  // ];
  // const rand = Math.floor(Math.random() * backgroundColorList.length);
  // const valueColor = backgroundColorList[rand];

  return (
    <div className="postcard">
      <div className="headercard">
        <h2>
          <span className="dateText">
            {" "}
            <ReactTimeAgo date={created_at} locale="fr" />{" "}
          </span>
          par user{user_id}
        </h2>
        <p> {category_id} porno </p>
      </div>
      <div className="contentcard">
        <p>{content}</p>
      </div>
      <div className="footercard">
        <ButtonLikeDislike />
      </div>
    </div>
  );
}
PostCard.propTypes = {
  post: propTypes.shape({
    user_id: propTypes.number.isRequired,
    content: propTypes.string.isRequired,
    category_id: propTypes.number.isRequired,
    created_at: propTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

// PostCard.defaultProps = {
//   post: propTypes.shape({
//     user_id: propTypes.number,
//     content: propTypes.string,
//     category_id: propTypes.number,
//     created_at: propTypes.instanceOf(Date),
//   }),
// };

export default PostCard;

import "./styles/ButtonReturnPurple.css";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow-return-white.png";

export default function ButtonReturnPurple() {
  const navigate = useNavigate();

  return (
    <div className="returnbuttonpurple">
      <button
        className="button-return-purple"
        type="button"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(-1)}
      >
        <img
          className="arrow-return-purple"
          src={arrow}
          alt="arrow-return-white"
        />
      </button>
    </div>
  );
}

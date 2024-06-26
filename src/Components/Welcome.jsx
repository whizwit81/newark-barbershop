import { Link } from "react-router-dom";
import "./Welcome.css";

export const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="image-container">
        <img
          className="welcome-image"
          src="./src/Images/NewarkBS5.png"
          alt="website-log"
        ></img>
      </div>
      <div className="btn-container">
        <Link to="/newAppointment">
          <button className="home-page-btn btn btn-secondary">
            Schedule Haircut
          </button>
        </Link>
      </div>
    </div>
  );
};

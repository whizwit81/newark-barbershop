import "./NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link className="navbar-link" to="/">
          Home
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="shopHours">
          Shop Hours
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="myAccount">
          My Account
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="newAppointment">
          New Appointment
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="ourTeam">
          Barbers
        </Link>
      </li>

      {localStorage.getItem("user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

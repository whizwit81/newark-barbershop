import { useEffect, useState } from "react";
import { getAppointments } from "../Services/ScheduledApptService.jsx";
import "./MyAccount.css";
import { createUser, getUsers } from "../Services/UserService.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteAppointment } from "../Services/DeleteService.jsx";

export const MyAccount = ({ currentUser }) => {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState({});


  useEffect(() => {
    if (currentUser.id) {
      getUsers(currentUser).then((data) => {
        setUser(data);
      });
    }
  }, [currentUser]);

  const whoCaresRefreshPlease = () => {
    getAppointments().then((data) => {
      const appointmentObj = data.filter(
        (data) => data.userId === currentUser.id
      );
      setAppointments(appointmentObj);
    });
  };

  useEffect(() => {
    if(currentUser){
        getAppointments().then((data) => {
      const appointmentObj = data.filter(
        (data) => data.userId === currentUser.id
      );
      setAppointments(appointmentObj);
    
    })};
  }, [currentUser]);

  const handleDelete = (apptparam, event) => {
    event.preventDefault();
    deleteAppointment(apptparam).then(() => {
      whoCaresRefreshPlease();
    });
  };

  return (
    <div className="myaccount-container internal-container">
      <div className="newAppointment-image">
        <img
          className="welcome-image"
          src="./src/Images/NewarkBSsmall.png"
          alt="website-log"
        ></img>
      </div>
      <div className="welcome-user">
        <h2 key={user.name}>Welcome {user?.name}!</h2>
      </div>

      <div className="user-appointments">
        <h3 className="my-appointments">My appointments</h3>
        {appointments.length === 0 ? (
          <div>
            <h3>You have no appointment scheduled</h3>
          </div>
        ) : (
          appointments.map((appointment) => (
            <div className="appointment" key={appointment.id}>
              <Link to={`/editAppointment/${appointment.id}`}>
                You're scheduled with: {appointment.barber} on{" "}
                {appointment.month} {appointment.day} at {appointment.time}
              </Link>
              <button
                type="button"
                onClick={(event) => handleDelete(appointment, event)}
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

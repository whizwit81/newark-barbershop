import { useEffect, useState } from "react";
import { getAppointmentById } from "../Services/ScheduledApptService.jsx";
// import"./MyAccount.css"
import { useParams } from "react-router-dom";
import "./ScheduledAppt.css";
import { getUsers } from "../Services/UserService.jsx";
import { Link } from "react-router-dom";

export const MyScheduledAppt = ({ currentUser }) => {
  const [appointments, setAppointments] = useState([]);
  const [userName, setUserName] = useState([]);

  const { myscheduledappt } = useParams();

  useEffect(() => {
    if (currentUser.id) {
      getUsers(currentUser).then((data) => {
        setUserName(data);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (myscheduledappt) {
      getAppointmentById(myscheduledappt).then((data) => {
        setAppointments([data]);
      });
    }
  }, [myscheduledappt]);

  return (
    <div className="myschedule-container internal-container">
      <h1>
        <span>Newark Barber Shop</span>
      </h1>

      <h2>You're all set!</h2>
      <div className="confirmation-container">
        <div className="myschedule">
          {appointments.map((appointment) => {
            return (
              <div className="schedule-confirmation" key={appointment.id}>
                You're scheduled with:{" "}
                <strong>
                  {" "}
                  {appointment.barber} on {appointment.month} {appointment.day}{" "}
                  at {appointment.time}{" "}
                </strong>
              </div>
            );
          })}
        </div>

        <div className="confirmation-edit">
          <p>
            To change or delete your appointment, go to{" "}
            <Link className="navbar-link" to="/myAccount">
              My Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

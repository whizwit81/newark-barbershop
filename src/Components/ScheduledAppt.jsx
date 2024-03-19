import { useEffect, useState } from "react";
import { getAppointments } from "../Services/ScheduledApptService.jsx";
import"./MyAccount.css"
import { getUserByEmail } from "../Services/UserService.jsx";
import { useParams } from "react-router-dom";

export const MyScheduledAppt = () => {
const [appointments, setAppointments] = useState([])
const [loggedUser, setLoggedUser] = useState([])

const {appointmentId} = useParams()


useEffect(() => {
    getAppointments(appointmentId).then((data) => {
            const appointmentObj = data
          setAppointments(appointmentObj);
        });
      }, [appointmentId]);

useEffect(() => {
    getUserByEmail().then((loggedUser) => {
          setLoggedUser(loggedUser);
        });
      }, []);


    return (
        <div className="myschedule-container">
            <h1>
                <span>Newark Barber Shop</span>
            </h1>

            <h2>You're all set!</h2>
        <div>
           
           <div className="all-appointments">{appointments.map(appointment => {
            return (
                <div key={appointment.id} >You're scheduled with: {appointment.barber} on {appointment.month}{appointment.day} at {appointment.time}</div>
            )
           })}</div>
          
        </div>

        </div>
    )
}
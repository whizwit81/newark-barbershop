import { useEffect, useState } from "react";
import { getAppointments } from "../Services/ScheduledApptService.jsx";
// import"./MyAccount.css"
import { getUserByEmail } from "../Services/UserService.jsx";
import { useParams } from "react-router-dom";
import "./ScheduledAppt.css"

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


    return (
        <div className="myschedule-container">
            <h1>
                <span>Newark Barber Shop</span>
            </h1>

            <h2>You're all set!</h2>
        <div>
           
           <div className="myschedule">{appointments.map(appointment => {
            return (
                <div key={appointment.id} >You're scheduled with: {appointment.barber} on {appointment.month}{appointment.day} at {appointment.time}</div>
            )
           })}</div>
          
        </div>

        </div>
    )
}
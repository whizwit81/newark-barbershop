import { useEffect, useState } from "react";
import { getAppointments } from "../Services/ScheduledApptService.jsx";
import"./MyAccount.css"
import { createUser, getUsers } from "../Services/UserService.jsx";
import { Link, useParams } from "react-router-dom";

export const MyAccount = ({currentUser}) => {
const [appointments, setAppointments] = useState([])
const [userName, setUserName] = useState([])

const {appointmentId} = useParams()

useEffect(() => {
    if(currentUser.id){
    getUsers(currentUser).then((data) => {
            
            setUserName(data)
    })}
}, [currentUser])

useEffect(() => {
    getAppointments(appointmentId).then((data) => {
            const appointmentObj = data
          setAppointments(appointmentObj);
        });
      }, [appointmentId]);

    return (
        <div className="myaccount-container">
            <h1>

                <span>Newark Barber Shop</span>
            </h1>
            <div className="welcome-user">    
                <div key={userName.name} >Welcome {userName.name}!</div>
           </div>

           <div>
           
           <div className="user-appointments"><Link to="/editAppointment">{appointments.map(appointment => {
            return (
                <div key={appointment.id} >You're scheduled with: {appointment.barber} on {appointment.month}{appointment.day} at {appointment.time}</div>
            )
           })}</Link></div>
          
        </div> 
        </div>
    )
}
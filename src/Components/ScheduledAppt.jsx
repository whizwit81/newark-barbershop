import { useEffect, useState } from "react";
import { getAppointments } from "../Services/ScheduledApptService.jsx";
// import"./MyAccount.css"
import { useParams } from "react-router-dom";
import "./ScheduledAppt.css"
import { getUsers } from "../Services/UserService.jsx";


export const MyScheduledAppt = ({currentUser}) => {
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
        const appointmentObj = data.filter((data) => data.userId === currentUser.id)
          setAppointments(appointmentObj);
        });
      }, [appointmentId]);


    return (
        <div className="myschedule-container internal-container">
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
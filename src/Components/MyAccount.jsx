import { useEffect, useState } from "react";
import { getAppointments } from "../Services/ScheduledApptService.jsx";
import"./MyAccount.css"
import { createUser, getUsers } from "../Services/UserService.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteAppointment } from "../Services/DeleteService.jsx";

export const MyAccount = ({currentUser}) => {
const [appointments, setAppointments] = useState([])
const [userName, setUserName] = useState([])

const {appointmentId} = useParams()
const navigate = useNavigate()

useEffect(() => {
    if(currentUser.id){
    getUsers(currentUser).then((data) => {
            
            setUserName(data)
    })}
}, [currentUser])


const whoCaresRefreshPlease =()=> {
    getAppointments(appointmentId).then((data) => {
        const appointmentObj = data
      setAppointments(appointmentObj);
    });
}

useEffect(() => {
    getAppointments(appointmentId).then((data) => {
            const appointmentObj = data
          setAppointments(appointmentObj);
        });
      }, [appointmentId]);

      const handleDelete = (apptparam, event) => {
        event.preventDefault()
        deleteAppointment(apptparam).then(() => {
            whoCaresRefreshPlease()
        })}

    return (
        <div className="myaccount-container">
            <h1>

                <span>Newark Barber Shop</span>
            </h1>
            <div className="welcome-user">    
                <div key={userName.name} >Welcome {userName.name}!</div>
           </div>

           <div>
           
           <div className="user-appointments">`{appointments.map(appointment => {

            return (
                <>
               <Link to={`/editAppointment/${appointment.id}`}><div key={appointment.id}>
                You're scheduled with: {appointment.barber} on {appointment.month}{appointment.day} at {appointment.time}</div>
                </Link>
                <button type="button" onClick={(event)=> handleDelete(appointment, event)}>🗑️</button>
                </>
                    
            )
           })}</div>
          
        </div> 
        </div>
    )
}
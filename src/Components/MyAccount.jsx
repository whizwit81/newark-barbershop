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


useEffect(() => {
    if(currentUser.id){
    getUsers(currentUser).then((data) => {
        setUserName(data)
            
    })}
}, [currentUser])


const whoCaresRefreshPlease =()=> {
    getAppointments(appointmentId).then((data) => {
        const appointmentObj = data.filter((data) => data.userId === currentUser.id)
        setAppointments(appointmentObj);
    });
}

useEffect(() => {
    getAppointments(appointmentId).then((data) => {
        const appointmentObj = data.filter((data) => data.userId === currentUser.id)
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
                    <div key={userName.name}>Welcome {userName.name}!</div>
                </div>
                <div>
                    <div className="user-appointments">
                        {appointments.length === 0 ? (
                            <div><h2>You have no appointments scheduled</h2></div>
                        ) : (
                        appointments.map(appointment => (
                        <div key={appointment.id}>

                        <Link to={`/editAppointment/${appointment.id}`}>
                        You're scheduled with: {appointment.barber} on {appointment.month} {appointment.day} at {appointment.time}
                        </Link>
                        <button type="button" onClick={(event) => handleDelete(appointment, event)}>🗑️</button>
                    </div>
                    ))
                )}
                </div>
            </div> 
        </div>
        )
}
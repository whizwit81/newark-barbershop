import { useEffect, useState } from "react";
import { getAppointments } from "../Services/ScheduledApptService.jsx";
import"./MyAccount.css"
import { getUserByEmail } from "../Services/UserService.jsx";

export const MyAccount = () => {
const [appointments, setAppointments] = useState([])



useEffect(() => {
    getAppointments().then((allAppts) => {
          setAppointments(allAppts);
        });
      }, []);



    return (
        <div className="myaccount-container">
            <h1>

                <span>Newark Barber Shop</span>
            </h1>
            <div>Welcome User!</div>
        </div>
    )
}
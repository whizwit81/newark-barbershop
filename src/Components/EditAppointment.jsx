import { useEffect, useState } from "react";
import {getBarbers} from "../Services/UserService.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { createAppointment } from "../Services/NewApptService.jsx";
import { getAppointmentById, updateAppointment } from "../Services/ScheduledApptService.jsx";



export const EditDropDownAppointment = ({currentUser}) => {

  const [barbers, setBarbers] = useState([]);
  const [appointments, setAppointments] = useState({})
  

  const navigate = useNavigate()

  const {updatedAppt} = useParams()

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = [
      "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th",
      "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th",
      "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"
    ]
    
    
    const timeSlots = [
        "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
        "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
    ]
    
    useEffect(() => {
      getAppointmentById(parseInt(updatedAppt)).then((data) => {
            setAppointments(data);
          });
        }, [updatedAppt]);
    
    useEffect(() => {
    getBarbers().then((allBarbers) => {
      setBarbers(allBarbers);
    });
  }, []);

 
  const handleInputChange = (event) => {
    const stateCopy = { ...appointments }
    stateCopy[event.target.name] = event.target.value
    setAppointments(stateCopy)
}




  const submitUpdatedAppointment = () => {
    const whateverMyHeartDesires = {
        id: updatedAppt,
        userId: currentUser.id,
        barber: appointments.barber,
        month: appointments.month,
        day: appointments.day,
        time: appointments.time
    }
    updateAppointment(whateverMyHeartDesires).then(() =>{navigate(`/newAppointment/${currentUser.id}`)})

  }

  return (
    <div className="appointment-container">
      <h1>
        <span>Newark Barber Shop</span>
      </h1>
      <h2>Want to make change?</h2>

      <div>
        <select required
          className="barber"
          name="barber"
          value={appointments.barber}
          onChange={handleInputChange}
        >
          <option hidden disable value="0">{appointments?.barber}</option>
          {barbers.map((barber) => {
            return (
              <option key={barber.id} value={barber.name}>
                {barber.name}
              </option>
            );
          })}
        </select>

        <p>Barber: {appointments.barber} </p>
      </div>

      <div>
      <label value="month"/>
        <select required name="month" value={appointments.month} onChange={handleInputChange}>
            <option value="">{appointments?.month}</option>
            {months.map((month, index) => (
            <option key={index} value={month}>{month}</option>
            ))}
        </select>

        <p>Month: {appointments.month}</p>
      </div>
                
      <div>
      <label value="day"/>
        <select required name="day" value={appointments.day} onChange={handleInputChange}>
            <option value="">{appointments?.day}</option>
            {days.map((day, index) => (
            <option key={index} value={day}>{day}</option>
            ))}
        </select>
        <p>Day: {appointments.day}</p>
      </div>

      <div>
      <label value="times"/>
        <select required name="time" value={appointments.time} onChange={handleInputChange}>
            <option value="">{appointments?.time}</option>
            {timeSlots.map((time, index) => (
            <option key={index} value={time}>{time}</option>
            ))}
        </select>
        <p>Time: {appointments.time}</p>
      </div>

      <div>
      <button className="submit_button" onClick={()=>{
        submitUpdatedAppointment()
      }}>Update Appt</button>
      </div>

    </div>

  );
};

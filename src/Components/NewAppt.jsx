import { useEffect, useState } from "react";
import "./NewAppt.css";
import {getBarbers} from "../Services/UserService.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { createAppointment } from "../Services/NewApptService.jsx";


export const NewAppointment = ({currentUser}) => {

  const [barbers, setBarbers] = useState([]);
  const [selectedBarber, setSelectedBarber] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("")
  const [selectedDay, setSelectedDay] = useState("")
  const [selectedTime, setSelectedTime]= useState("")

  const navigate = useNavigate()

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
    getBarbers().then((allBarbers) => {
      setBarbers(allBarbers);
    });
  }, []);

    const selectedBarberChange = (e) => {
    setSelectedBarber(e.target.value);
  };

  const selectedMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const selectedDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const selectedTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };


  const submitNewAppointment = () => {
    const whateverMyHeartDesires = {
        userId: currentUser.id,
        barber: selectedBarber,
        month: selectedMonth,
        day: selectedDay,
        time: selectedTime
    }
    createAppointment(whateverMyHeartDesires).then(() =>{navigate(`/newAppointment/${currentUser.id}`)})

  }



  return (
    <div className="appointment-container">
      <h1>
        <span>Newark Barber Shop</span>
      </h1>
      <h2>Schedule a haircut</h2>

      <div>
        <select required
          className="barber"
          value={selectedBarber}
          onChange={selectedBarberChange}
        >
          <option value="Please make selection">Select a Barber</option>
          {barbers.map((barber) => {
            return (
              <option key={barber.id} value={barber.name}>
                {barber.name}
              </option>
            );
          })}
        </select>

        <p>Barber: {selectedBarber} </p>
      </div>

      <div>
      <label value="month"/>
        <select required id="month" value={selectedMonth} onChange={selectedMonthChange}>
            <option value="">Select Month</option>
            {months.map((month, index) => (
            <option key={index} value={month}>{month}</option>
            ))}
        </select>

        <p>Month: {selectedMonth}</p>
      </div>
                
      <div>
      <label value="day"/>
        <select required id="day" value={selectedDay} onChange={selectedDayChange}>
            <option value="">Select Day</option>
            {days.map((day, index) => (
            <option key={index} value={day}>{day}</option>
            ))}
        </select>
        <p>Day: {selectedDay}</p>
      </div>

      <div>
      <label value="times"/>
        <select required id="times" value={selectedTime} onChange={selectedTimeChange}>
            <option value="">Select Time</option>
            {timeSlots.map((time, index) => (
            <option key={index} value={time}>{time}</option>
            ))}
        </select>
        <p>Time: {selectedTime}</p>
      </div>

      <div>
      <button className="submit_button" onClick={()=>{
        submitNewAppointment()
      }}>Save Appointment</button>
      </div>

    </div>

  );
};

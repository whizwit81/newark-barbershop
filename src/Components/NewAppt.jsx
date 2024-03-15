import { useEffect, useState } from "react"
import"./NewAppt.css"
import { getBarbers } from "../Services/UserService.jsx"

export const NewAppointment = () => {
const [selectedBarber, setSelectedBarber] = useState([])

const selectedBarberChange = (e) => {
    setSelectedBarber(e.target.value)
}

// useEffect(() => {
//     getBarbers().then(barberArray => {
//         setSelectedBarber(barberArray)
//     })
// }, [])

    return (
        <div className="welcome-container">
            <h1>

                <span>Newark Barber Shop</span>
            </h1>
            <h2>Schedule a haircut</h2>

            <div>
    
                <select className="barbers" value={selectedBarber} onChange={selectedBarberChange}>
                    <option value="option 1">Select a Barber</option>
                    <option value="option 2">Brick Tamland</option>
                    <option value="option 3">Shakey Bob</option>
                    <option value="option 4">Wes Mantooth</option>
                </select>

                <p>Selected Barber: {selectedBarber}</p>
            </div>
        </div>
    )
}
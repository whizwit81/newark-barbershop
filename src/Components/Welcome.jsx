import { Link } from "react-router-dom"
import"./Welcome.css"

export const Welcome = () => {
    return (
        <div className="welcome-container internal-container">
            <h1>

                <span>Welcome to Newark Barber Shop</span>
            </h1>
            <div>
                <h2>In Business since 1957</h2>
                
                </div>
        <div className="btn-container">
            <Link to="/newAppointment">
            <button className="btn btn-secondary">Schedule Haircut</button>
            </Link>
        </div>
        </div>
    )
}
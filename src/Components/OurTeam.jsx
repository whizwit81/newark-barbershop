import { useEffect } from "react";
import { useState } from "react";
import { NeededBarber, getBarbers } from "../Services/UserService.jsx";
import { useParams } from "react-router-dom";


export const BarberList = () => {
  const [barbers, setBarbers] = useState([]);


  useEffect(() => {
    getBarbers().then((barberArray) => {
      setBarbers(barberArray);
    });
  }, []);

  return (

    
    <div className="barber-header">
      {barbers.map((barberObj) => {
        return (
          <div className="each-barber"  key={barberObj.id}>
            <NeededBarber barber={barberObj} />
            </div>
            
        );
      })}
    </div>
  );
};

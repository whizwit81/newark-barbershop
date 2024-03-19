import {Routes, Outlet, Route} from "react-router"
import { NavBar } from "../Nav/NavBar.jsx"
import { Welcome } from "../Components/Welcome.jsx"
import { MyAccount } from "../Components/MyAccount.jsx"
import { NewAppointment } from "../Components/NewAppt.jsx"
import { ShopHours } from "../Components/ShopHours.jsx"
import { OurTeam } from "../Components/OurTeam.jsx"
import { useEffect, useState } from "react"
import { MyScheduledAppt } from "../Components/ScheduledAppt.jsx"



export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("user")));
  }, [])
  

    return (
        <Routes>  
        
          <Route path="/" element={<>
                <NavBar />
                <Outlet />
              </>
            }
          > 
         <Route index element={<Welcome/>} />

         <Route path="/shopHours" element={<ShopHours/>}></Route>
         <Route path="/myAccount" element={<MyAccount/>}></Route>
         <Route path="/newAppointment">
            <Route index element={<NewAppointment currentUser={currentUser}  />}/>
            <Route path=":myscheduledappt" element={<MyScheduledAppt currentUser={currentUser}/>}/>
            </Route>

         <Route path="/ourTeam" element={<OurTeam/>}></Route>    
         
              
      
        </Route>
      </Routes>
      )


}

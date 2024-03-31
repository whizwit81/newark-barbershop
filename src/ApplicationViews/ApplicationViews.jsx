import { Routes, Outlet, Route } from "react-router";
import { NavBar } from "../Nav/NavBar.jsx";
import { Welcome } from "../Components/Welcome.jsx";
import { MyAccount } from "../Components/MyAccount.jsx";
import { NewAppointment } from "../Components/NewAppt.jsx";
import { ShopHours } from "../Components/ShopHours.jsx";
import { BarberList } from "../Components/OurTeam.jsx";
import { useEffect, useState } from "react";
import { MyScheduledAppt } from "../Components/ScheduledAppt.jsx";
import { EditDropDownAppointment } from "../Components/EditAppointment.jsx";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />

        <Route path="/shopHours" element={<ShopHours />}></Route>
        <Route
          path="/myAccount"
          element={<MyAccount currentUser={currentUser} />}
        ></Route>

        <Route
          path="/editAppointment"
          element={<EditDropDownAppointment currentUser={currentUser} />}
        >
          <Route index element={<NewAppointment currentUser={currentUser} />} />
          <Route
            path=":updatedAppt"
            element={<EditDropDownAppointment currentUser={currentUser} />}
          />
        </Route>

        <Route path="/newAppointment">
          <Route index element={<NewAppointment currentUser={currentUser} />} />
          <Route
            path=":myscheduledappt"
            element={<MyScheduledAppt currentUser={currentUser} />}
          />
          
        </Route>

        <Route path="/ourTeam" element={<BarberList />}></Route>
      </Route>
    </Routes>
  );
};

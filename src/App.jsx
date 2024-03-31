import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Auth/Login.jsx";
import { ApplicationViews } from "./ApplicationViews/ApplicationViews";
import { Register } from "./Auth/Register.jsx";
import { Authorized } from "./ApplicationViews/Authorized.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          //Check if the user is authorized first
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};

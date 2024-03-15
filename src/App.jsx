import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Login } from "./Auth/Login.jsx"
// import { Register } from "./components/auth/Register.jsx"
// import { Authorized } from "./views/Authorized.jsx"
import { ApplicationViews } from "./ApplicationViews/ApplicationViews"
import { Register } from "./Auth/Register.jsx"

export const App = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/> 

        <Route
          path="*"
          element={
             //Check if the user is authorized first
            
                <ApplicationViews/>
            
          }
          />

    </Routes>
  
  )
}
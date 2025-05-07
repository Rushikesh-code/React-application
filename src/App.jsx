import Login from "./components/AuthCredentials/Login";
import {  Routes, Route } from "react-router";
import Register from "./components/AuthCredentials/Register.jsx";
import Dashboard from "./components/User/Dashboard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import MyProfile from "./components/User/MyProfile.jsx";

function App() {

  return (
      <div>
              <Routes>
                  <Route index="true" element={<Login />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<MyProfile />} />
              </Routes>
      </div>
  )
}

export default App

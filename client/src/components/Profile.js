import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./EmployeeNavbar";
import "../styles/payroll.css";
import userIcon from "../assets/usericon.png"; // Import the user icon image

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container">
      <Navbar />
      <div className="payrollBody">
        <div className="profileContent">
          <h1>Profile</h1>
          <div className="userIconContainer">
            <img src={userIcon} alt="User Icon" className="userIcon" />
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

import "../styles/employees.css";
import logo from "../assets/navlogo.jpg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

export default function Employees() {
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
      if (!response.ok) {
        console.log(" error is here");
        const errorData = await response.json();
        if (errorData.errors) {
          setErrors(errorData.errors.map((err) => err.msg));
        } else {
          throw new Error(errorData.msg || "An error occurred");
        }
        return;
      }
      console.log("response is ok");
      const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);
      console.log("Login successful");
      window.location.href = "/payroll";
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegistration = () => {
    navigate("register");
  }

  return (
    <>
      <div className="mainContainer">
        <div className="bodyDiv">
          
          <div className="imgContainer">
            <img src={logo} alt="Instagram" className="imgContainer" />
          </div>

          {error && <p>{error}</p>}
          {errors.length > 0 && (
            <ul>
              {errors.map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          )}

          <form className="login">
        
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button type="submit" id="submitButton" onClick={handleLogin}>
                LOGIN
              </button>
              <div className="registerDiv" >  
              <p onClick={handleRegistration} className="register">Register here</p>
            </div>
          </form>
        </div>
        <div className="footer">Rondon Construction & Renovations © 2024</div>
      </div>
    </>
  );
}

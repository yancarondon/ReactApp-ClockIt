import React, { useState, useEffect } from "react";
import "../styles/payroll.css";
import Navbar from "./EmployeeNavbar"; 


export default function Payroll() {
  const [shifts, setShifts] = useState([]);
  const [user, setUser] = useState("");
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 10);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://react-app-clock-server.vercel.app/shifts/shifts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setShifts(data);
        if (data.length > 0) {
          setUser(data[0].user);
        }
      })
      .catch((error) => console.error("Error fetching right here!", error));
  }, []);

 
  const calculateTotalHours = () => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7); 
    const filteredShifts = shifts.filter(shift => new Date(shift.clockIn) > weekAgo);
    const totalMilliseconds = filteredShifts.reduce((total, shift) => {
      const clockIn = new Date(shift.clockIn);
      const clockOut = new Date(shift.clockOut);
      return total + (clockOut - clockIn);
    }, 0);
    const totalHours = totalMilliseconds / (1000 * 60 * 60);
    return totalHours;
  };

  // Calculate total weekly salary
  const totalHoursWorked = calculateTotalHours();
  const totalWeeklySalary = totalHoursWorked * 20; // For a salary of $20 per hour

  return (
    <div className="container">
      <Navbar />
      <div className="payrollBody">
        <h2
          className="greeting"
          style={{
            marginLeft: showText ? "0" : "-300px",
            transition: "margin-left 1s",
          }}
        >
          WELCOME BACK, {user.toUpperCase()}
        </h2>
        <div className="bodydivs">
          <div className="leftdiv">
            <h4>A GLANCE A YOUR PAST SHIFTS</h4>
            <div className="wrapperDiv">
              {shifts.map((shift, index) => (
                <div className="payrollDivs" key={index}>
                  <p>Clock In: {new Date(shift.clockIn).toLocaleString()}</p>
                  <p>Clock Out: {new Date(shift.clockOut).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rightdiv">
            <h4>YOUR MOST RECENT WEEKLY PAYMENT</h4>
            <div className="wrapperDiv">
            <div className="payrollDivs">
              <p>Total Hours Worked in the Past Week: {totalHoursWorked.toFixed(2)}</p>
              <p>Total Weekly Salary: ${totalWeeklySalary.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

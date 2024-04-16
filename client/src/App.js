import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
import Employees from "./components/Employees";
import Payroll from "./components/Payroll";
import ShowNavBar from "./components/ShowNavBar";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
        <ShowNavBar>
          <NavBar />
        </ShowNavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/register" element={<Register />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
    </Router>
  );
}

export default App;

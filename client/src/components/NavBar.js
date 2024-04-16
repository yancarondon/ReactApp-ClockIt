import React, { Component } from "react";
import { Link } from "react-router-dom";
import navlogo from "../assets/navlogo.jpg";
import "../styles/NavBarStyles.css";

export default class NavBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className="navbar1">
          <Link to="/">
            <img
              src={navlogo}
              alt="Logo"
              style={{
                marginTop: "300px",
                marginLeft: "20px",
                width: "40px",
                height: "40px",
                backgroundColor: "transparent",
                
              }}
            />
          </Link>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/employees">Employees</Link>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

import React from 'react';
import '../styles/EmployeeNavBar.css';


function EmployeeNavbar() {
  return (
    <nav>
      <ul>
        <li><a href="/payroll">Home</a></li>
        {/* <li><a href="/payroll">Payroll</a></li> */}
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
}

export default EmployeeNavbar;

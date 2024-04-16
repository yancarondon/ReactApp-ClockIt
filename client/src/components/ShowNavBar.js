import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShowNavBar = ({ children }) => {
  const location = useLocation();
  const [viewNavBar, setViewNavBar] = useState(true);

  useEffect(() => {
    if (location.pathname === "/payroll") {
      setViewNavBar(false);
    }
    else if (location.pathname === "/profile") {
      setViewNavBar(false);
    } else {
      setViewNavBar(true);
    }
  }, [location]);

  return <div>{viewNavBar && children}</div>;
};

export default ShowNavBar;

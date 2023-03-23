import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to='/dashboard'>
          <li>Dashboard</li>
        </Link>
        <Link to='booking'>
          <li>Booking</li>
        </Link>
        <Link to='sellcar'>
          <li>Sellcar</li>
        </Link>
        <Link to='setting'>
          <li>Setting</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

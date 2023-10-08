import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  
  return (
    <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-3 rounded-b-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-white text-6xl font-bold tracking-wider fonty"
        >
          EduEvent
        </Link>
        <ul className="space-x-6 flex text-xl">
          <li>
            <NavLink
              to="/"
              className="text-white hover:text-pink-300 transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className="text-white hover:text-pink-300 transition duration-300"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white hover:text-pink-300 transition duration-300"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-white hover:text-pink-300 transition duration-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="text-white">
          
          <Link to="/login">
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                Login
              </button>
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

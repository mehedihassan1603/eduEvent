import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Navbar() {
  
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => console.log("Successfull"))
      .catch((error) => console.log(error));
  };
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-cyan-900 to-blue-900 px-6 py-3">
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
          <div className="dropdown dropdown-hover">
            
            <label
              tabIndex={0}
              className="m-1 text-white hover:text-pink-300 transition duration-300"
            >
              Event
            </label>
            

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={`/details/1`}>Workshop and Seminar</NavLink>
              </li>
              <li>
              <NavLink to={`/details/2`}>Online Courses</NavLink>
              </li>
              <li>
              <NavLink to={`/details/3`}>Career Fairs</NavLink>
              </li>
              <li>
              <NavLink to={`/details/4`}>Artist Skills Swap</NavLink>
              </li>
              <li>
              <NavLink to={`/details/5`}>Creative Kids Corner</NavLink>
              </li>
              <li>
              <NavLink to={`/details/6`}>IT Learning and Training.</NavLink>
              </li>
            </ul>
          </div>

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
          {
            user && <>
                      <li>
            <NavLink
              to="/notice"
              className="text-white hover:text-pink-300 transition duration-300"
            >
              Notice
            </NavLink>
          </li>
            
            </>
          }
        </ul>
        <div className="text-white">
          {user ? (
            <>
              <span>{user.email}</span>
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <a onClick={handleLogout}>Logout</a>
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <h2>DMessage</h2>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  style={({ isActive }) => ({
                    //change color when clicked
                    color: isActive ? "#000A24  " : "#545e6f",
                  })}
                >
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/App"
                  style={({ isActive }) => ({
                    color: isActive ? "#000A24" : "#545e6f",
                  })}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/VC"
                  style={({ isActive }) => ({
                    color: isActive ? "#000A24" : "#545e6f",
                    //background: isActive ? "#7600dc" : "#f0f0f0",
                  })}
                >
                  Videocall
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "#000A24" : "#545e6f",
                  })}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  style={({ isActive }) => ({
                    color: isActive ? "#000A24" : "#545e6f",
                  })}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

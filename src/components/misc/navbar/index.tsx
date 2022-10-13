import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (): JSX.Element => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark main-nav">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/?genre=horror" className={"nav-link text-light"}>
                Horror
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/?genre=romance" className={"nav-link text-light"}>
                Romance
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/?genre=comedy" className={"nav-link text-light"}>
                Comedy
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav id="sitenav" className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      ClickyPuppy
    </Link>
    <div>
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Play
          </Link>
        </li> */}
        <li className="nav-item">
          <Link
            to="/play"
            className={
              window.location.pathname === "/play"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Play
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/discover"
            className={
              window.location.pathname === "/discover"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Discover
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/tournament"
            className={
              window.location.pathname === "/tournament"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Tournament
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

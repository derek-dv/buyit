import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link className="navbar__left__link" to="/">
          buy<span>i</span>t
        </Link>
      </div>

      <div className="navbar__middle">
        <ul className="navbar__middle__list">
          <li className="navbar__middle__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__middle__item">
            <Link to="/sell">Sell for us</Link>
          </li>
          <li className="navbar__middle__item">
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>

      <div className="navbar__right">
        <ul className="navbar__right__list">
          <li className="navbar__right__item">
            <Link to="/login">Login</Link>
          </li>
          <li className="navbar__right__item">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

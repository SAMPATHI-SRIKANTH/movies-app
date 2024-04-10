import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <h1 className="head">Movies</h1>
      </div>
      <div className="right-side">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Popular
            </Link>
          </li>
          <li>
            <Link to="/top-rated" className="nav-link">
              Top Rated
            </Link>
          </li>
          <li>
            <Link to="/up-coming" className="nav-link">
              Up Coming
            </Link>
          </li>
        </ul>
        <div className="search-container">
          <input
            type="search"
            placeholder="enter movie"
            className="input-element"
          />
          <button className="search-btn">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  return (
    <div id="nav-container">
      <Link to="/">
        <button className="btn btn-warning"> Restart </button>
      </Link>
      <Link to="/match">
        <button className="start btn btn-warning">Start </button>
      </Link>
    </div>
  );
};

export default Nav;

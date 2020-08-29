import React, { useState } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {
  FaTwitterSquare,
  FaGoogle,
  FaLinkedinIn,
  FaExternalLinkAlt,
  FaTwitter,
  FaRegEnvelope,
  FaBars
} from "react-icons/fa";

const Header = (props) => {
  const [isClosed, setisClosed] = useState(true);
  const colorTheme = props.colorTheme;

  return (
    <nav>
      <div className="brand">Logo</div>
      <button onClick={props.toggleColorTheme}>Toggle</button>
      <button
        className="hamburger"
        tabIndex="0"
        onClick={() => setisClosed(!isClosed)}
      >
        <FaBars />
      </button>
      <ul className={`menu ${isClosed ? null : "open"}`}>
  
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/board">Board</Link>
            </li>
          </ul>
    </nav>
  );
};

export default Header;
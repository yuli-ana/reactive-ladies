import React, { useState } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { BsClipboardData } from 'react-icons/bs';

const Header = (props) => {
  const [isClosed, setisClosed] = useState(true);
  const colorTheme = props.colorTheme;

  return (
    <nav>
      <div className='brand'>
        <BsClipboardData />
        KanReact
      </div>
      {/* <button className="toggle" onClick={props.toggleColorTheme}>Toggle</button> */}
      <button
        className='hamburger'
        tabIndex="0"
        onClick={() => setisClosed(!isClosed)}
      >
        <FaBars />
      </button>
      <ul className={`menu ${isClosed ? null : 'open'}`}>
  
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/board">About</Link>
            </li>
            <li>
              <Link to="/about">Try It for Free</Link>
            </li>
           
          </ul>
    </nav>
  );
};

export default Header;
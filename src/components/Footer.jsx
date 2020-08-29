import React from "react";
import googlePlay from '../assets/128x128.jpg' 
import appleStore from '../assets/128x128copy.jpg' 
import {
  FaLinkedinIn,
  FaExternalLinkAlt,
  FaTwitter,
  FaRegEnvelope,
} from "react-icons/fa";

const Footer = (props) => {
  const date = new Date().getFullYear();
  const colorTheme = props.colorTheme;
  
  return (
    <footer>
      <label htmlFor='language' className='visuallyHidden'>Select language</label>
      <select name='language' id='language'>
        <option value='english'>English</option>
        <option value='french'>French</option>
      </select>
      <p>Copyright © Reactive Ladies {date}</p>
      <ul className="socials">
        <li>
        <a href='#'><FaLinkedinIn /></a>
        </li>
        <li>
          <a href='#'><FaExternalLinkAlt /></a>
        </li>
        <li>
          <a href='#'><FaTwitter /></a>
        </li>
        <li>
          <a href='#'><FaRegEnvelope /></a>
        </li>
      </ul>
      <ul className='appDl'>
        <li>
          <a><img src={googlePlay}/></a>
        </li>
        <li>
          <a><img src={appleStore}/></a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
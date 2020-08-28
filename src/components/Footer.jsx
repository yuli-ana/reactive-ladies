import React, { useState } from "react";
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
    <ul className="socials">
      <li>
      <FaLinkedinIn />
      </li>
      <li>
      <FaExternalLinkAlt />
      </li>
      <li>
      <FaTwitter />
      </li>
      <li>
        <FaRegEnvelope />
      </li>
    </ul>
    <p>Copyright © Reactive Ladies {date}</p>
      </footer>
  );
};

export default Footer;
import React from "react";
import googlePlay from '../assets/128x128.jpg' 
import appleStore from '../assets/128x128copy.jpg' 
import {
  FaLinkedinIn,
  FaExternalLinkAlt,
  FaTwitter,
  FaRegEnvelope,
} from 'react-icons/fa';
import Swal from 'sweetalert2';
import SelectLanguage from './SelectLanguage'


const Footer = (props) => {
  const date = new Date().getFullYear();
  const colorTheme = props.colorTheme;

  const showAlert = (store) => {
    Swal.fire({
      title: 'Hang on for updates!',
      imageWidth: 400,
      imageHeight: 400,
      confirmButtonColor: '#192B4D',
      text: `The app will be soon available in ${store}!`,
      confirmButtonText: 'Cool'
    })
  }
  
  return (
    <footer>
      <div className='upperFooter'>
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
        <div className='languageSelect'>
          <label htmlFor='language' className='visuallyHidden'>Select language</label>
          <SelectLanguage/>
        </div>
        <ul className='appDl'>
          <li>
            <a onClick={()=> showAlert('Google Play')}><img src={googlePlay}/></a>
          </li>
          <li>
            <a onClick={()=> showAlert('AppStore')}><img src={appleStore}/></a>
          </li>
        </ul>
      </div>
      <p className='copyright'> Copyright © Reactive Ladies {date}</p>
    </footer>
  );
};

export default Footer;
import React from 'react';
import headerImg from '../assets/undraw_online_organizer_ofxm.svg';
import {
  FaLinkedinIn,
  FaExternalLinkAlt,
  FaTwitter,
  FaReact,
  FaRegEnvelope,
} from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';


function Info() {
  return (
      <div className='wrapper'>
        <section className='intro'>
          <div className='introText'>
            <h1>Onboarding</h1>
            <p>Here we will tell you how to use our app</p>
            <p>Looking for more information about KanReact feautures? Contact our support team and we will follow up with you as soon as possible.</p>
            <FiPhoneCall /><FaRegEnvelope /><BiSupport />
          </div>
          <div className='introImg'>
            <img src={headerImg}/>
          </div>
        </section>
      </div>
    )
  }

export default Info;
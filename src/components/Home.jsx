import React, { Fragment } from "react";
import headerImg from '../assets/undraw_online_organizer_ofxm.svg';
import {
  FaLinkedinIn,
  FaExternalLinkAlt,
  FaTwitter,
  FaReact
} from "react-icons/fa";

function Home() {
    return (
      <div className='wrapper'>
        <section className='intro'>
          <div className='introText'>
            <h1>Maximize Productivity</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque eum non hic dolore praesentium optio fuga quasi nostrum sapiente recusandae quas, voluptatibus et cumque iusto quibusdam error perspiciatis libero.</p>
          </div>
          <div className='introImg'>
            <img src={headerImg}/>
          </div>
        </section>
        
        <section className='founders'>
          <h2>Founded by</h2>
          <ul className='foundersContainer'>
            <li className='foundersCard'>
              <img src='https://placeimg.com/400/400/people' />
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, iste!</p>
              <ul className='foundersSns'>
                <li><a href='#'><FaLinkedinIn/></a></li>
                <li><a href='#'><FaTwitter/></a></li>
                <li><a href='#'><FaExternalLinkAlt/></a></li>
              </ul>
            </li>
            <li className='foundersCard'>
              <img src='https://placeimg.com/400/400/people' />
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, iste!</p>
              <ul className='foundersSns'>
                <li><a href='#'><FaLinkedinIn/></a></li>
                <li><a href='#'><FaTwitter/></a></li>
                <li><a href='#'><FaExternalLinkAlt/></a></li>
              </ul>
            </li>
            <li className='foundersCard'>
              <img src='https://placeimg.com/400/400/people' />
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, iste!</p>
              <ul className='foundersSns'>
                <li><a href='#'><FaLinkedinIn/></a></li>
                <li><a href='#'><FaTwitter/></a></li>
                <li><a href='#'><FaExternalLinkAlt/></a></li>
              </ul>
            </li>
          </ul>
        </section>

        <section className='tools'>
          <h2>Created with</h2>
          <ul>
            <li><FaReact /> React</li>
            <li>mintbean</li>
            <li>FeaturePeek</li>
            <li>Juno College</li>
          </ul>
        </section>
      </div>
    )
  }


export default Home;
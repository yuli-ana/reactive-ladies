import React from "react";
import headerImg from '../assets/undraw_online_organizer_ofxm.svg';
import mintbeanLogo from '../assets/mintbean.png';
import imgTwo from '../assets/undraw_subscriber_vabu.svg';
import imgThree from '../assets/undraw_dev_productivity_umsq.svg';
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
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aut temporibus vel fuga similique eius minima fugit libero ex excepturi!</p>
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
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aut temporibus vel fuga similique eius minima fugit libero ex excepturi!</p>
          <ul>
            <li><FaReact /> React</li>
            <li><img className='mintbeanLogo' src={mintbeanLogo}/> mintbean</li>
            <li>FeaturePeek</li>
            <li>Juno College</li>
          </ul>
        </section>

        <section className='subscribe'>
          <img src={imgTwo} />
          <div className='subscribeText'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis, repellat architecto laborum nemo harum rem est distinctio ea. Rerum.</p>
            <button type='button'>Subscribe</button>
          </div>
          <img src={imgThree} />
        </section>
      </div>
    )
  }


export default Home;
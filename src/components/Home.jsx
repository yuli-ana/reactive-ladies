import React from "react";
import headerImg from '../assets/undraw_online_organizer_ofxm.svg';
import mintbeanLogo from '../assets/mintbean.png';
import featurepeekLogo from '../assets/featurepeekLogo.png';
import junoLogo from '../assets/juno-logo.png';
import reactLogo from '../assets/reactIcon.png';
import imgTwo from '../assets/undraw_subscriber_vabu.svg';
import imgThree from '../assets/undraw_dev_productivity_umsq.svg';
import {
  FaLinkedinIn,
  FaExternalLinkAlt,
  FaTwitter,
  FaReact
} from 'react-icons/fa';


function Home() {
    return (
      <div className='wrapper'>
        <section className='intro'>
          <div className='introText'>
            <h1>Stay Organized. Share Ideas.</h1>
            <p>Making notes and visualizing ideas made easy with KanReact app. A perfect tool to get your team inspired.</p>
          </div>
          <div className='introImg'>
            <img src={headerImg}/>
          </div>
        </section>
        
        <section className='founders'>
          <h2>Meet Our Founders:</h2>
          <h2>Eyel, Yuliana and Oksana</h2>
          <p>From a startup to a market leader! Together, they translated their vision into an innovative app that helps managing your workflow efficiently and do more what matters the most.</p>
          <ul className='foundersContainer'>
            <li className='foundersCard'>
              <img src='https://placeimg.com/400/400/people' />
              <h3>Eyel Mordido</h3>
              <p>A driven Front-End developer and clean design evangelist addicted to problem-solving</p>
              <ul className='foundersSns'>
                <li><a href='https://www.linkedin.com/in/eyel-mordido/' target='_blank' rel='noopener noreferrer' ><FaLinkedinIn /></a></li>
                <li><a href='https://twitter.com/eyel_mordido/' target='_blank' rel='noopener noreferrer' ><FaTwitter/></a></li>
                <li><a href='https://eyelmordido.com/' target='_blank' rel='noopener noreferrer'><FaExternalLinkAlt /></a></li>
              </ul>
            </li>
            <li className='foundersCard'>
              <img src='https://placeimg.com/400/400/people' />
              <h3>Yuliana Hazda</h3>
              <p> An enthusiastic visionaire and a talented Front-End developer in love with building interactive websites</p>
              <ul className='foundersSns'>
                <li><a href='https://www.linkedin.com/in/yuliana-hazda-b0ab711a8/' target='_blank' rel='noopener noreferrer' ><FaLinkedinIn /></a></li>
                <li><a href='https://twitter.com/yulianahazda/' target='_blank' rel='noopener noreferrer' ><FaTwitter /></a></li>
                <li><a href='https://yuliana.dev/' target='_blank' rel='noopener noreferrer' ><FaExternalLinkAlt /></a></li>
              </ul>
            </li>
            <li className='foundersCard'>
              <img src='https://placeimg.com/400/400/people' />
              <h3>Oksana Samokhvalova</h3>
              <p>An entepreneur at heart and a Web developer by choice passionate about creating high-impact products</p>
              <ul className='foundersSns'>
                <li><a href='https://www.linkedin.com/in/oksana-samokhvalova/' target='_blank' rel='noopener noreferrer' ><FaLinkedinIn /></a></li>
                <li><a href='https://twitter.com/oksanadev/' target='_blank' rel='noopener noreferrer' ><FaTwitter /></a></li>
                <li><a href='https://www.oksanadev.com/' target='_blank' rel='noopener noreferrer' ><FaExternalLinkAlt /></a></li>
              </ul>
            </li>
          </ul>
        </section>

        <section className='tools'>
          <h2>In collaboration with</h2>
          {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aut temporibus vel fuga similique eius minima fugit libero ex excepturi!</p> */}
          <ul>
            <li><img className='smallLogo' src={reactLogo} alt='react logo'/> React</li>
            <li><img className='mintbeanLogo' src={mintbeanLogo} alt='mintbean logo'/> mintbean</li>
            <li><img className='smallLogo' src={featurepeekLogo} alt='featurepeek logo'/>FeaturePeek</li>
            <li><img className='smallLogo' src={junoLogo} alt='juno logo'/>Juno College</li>
          </ul>
        </section>

        <section className='subscribe'>
          <img src={imgTwo} />
          <div className='subscribeText'>
            <p>Awesome teams around the world choose KanReact. Sign up for free and become one of them!</p>
            <button type='button'><a href='https://www.oksanadev.com/' target='_blank' rel='noopener noreferrer'>Subscribe</a></button>
          </div>
          <img src={imgThree} />
        </section>
      </div>
    )
  }


export default Home;
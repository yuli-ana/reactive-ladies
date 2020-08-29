import React from "react";
import headerImg from '../assets/undraw_online_organizer_ofxm.svg';

function Home() {
    return (
      <>
        <section className='wrapper intro'>
          <div className='introText'>
            <h1>Maximize Productivity</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque eum non hic dolore praesentium optio fuga quasi nostrum sapiente recusandae quas, voluptatibus et cumque iusto quibusdam error perspiciatis libero.</p>
          </div>
          <div className='introImg'>
            <img src={headerImg}/>
          </div>
        </section>
      </>
    )
  }


export default Home;
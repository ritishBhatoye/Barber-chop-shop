import React from 'react';
import { Footer } from '../Footer/Footer';
import StaticHeader from '../STATICHeader/StacticHeader';
import AboutUs from "./About.png";
import { AboutOurTeam } from './AboutOurTeam';
import { Testimonials } from './Testimonials';

const About = () => {
  return (
    <>
    <StaticHeader />
    <div className='about'>
      <div className='about-main'>
        <h1>about us</h1>
        <div><img src={AboutUs} /></div>
      </div>
      <div className='about-text'>
        <div className='about-text-left'>
        <h2>WE ARE BORN IN UNITED STATES, AND WE WORK IN A WAY THAT YOU WOULD LIKE TO ENTRUST THE CARE OF YOUR HAIR AND BEARD TO US.</h2>
      </div>
      <div className='about-text-right'>
        <p>It is saying that it is better to see once than to hear a thousand times. We are a professional team of hairdressers and bearders who adore their work and lack ambition. We are proud that the majority of men who have visited us once usually decide to return.</p>
      </div>
      </div>
    </div>
    <AboutOurTeam />
    <Testimonials />
    <Footer />
    </>
  )
}

export default About;

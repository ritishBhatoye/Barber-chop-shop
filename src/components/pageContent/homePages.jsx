import React from 'react'
import About from '../About/About';
import { Contact } from '../Contact/Contact';
import { Footer } from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Container from '../home/Container';
import FooterHome from '../home/Footer-home';
import { Home } from '../home/home';
import News from '../News/News';
import Services from '../Services/Services';
import { motion, useViewportScroll, useTransform } from "framer-motion";

const HomePages = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
<>
    
 <motion.Home       style={{
            scaleY: scrollYProgress
          }} />
 {/*<About />*/}
 {/*<Gallery />*/}
 {/*<News />*/}
 
{/*<Services />*/}
  {/*<Contact />*/}
  <Footer/>
</>
    )
}
export default HomePages;

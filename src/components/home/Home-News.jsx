import React from 'react'
import hairstyle from "./hairstyle-news.jpg";
import { motion } from 'framer-motion';
import Aos from "aos";
import "aos/dist/aos.css";
import Swup from 'swup';


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const HomeNews = () => {
  const swup = new Swup();
  const NewsData = [
    {
      id: 1,
      service: ". HAIRSTYLE",
      title: "5 BENIFITS OF GOING TO A BARBER",
      img: "8News-image1.webp",
      about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
    },
    {
      id: 2,
      service: ". BEARD",
      title: "WHICH TRIM SHOULD I CHOOSE",
      img: "https://images.unsplash.com/photo-1640301133857-c4bc5789c1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
    },
    {
      id: 3,
      service: ". COSMETIC",
      title: "BEST COSMETICS FOR YOUR HAIR",
      img: "https://images.unsplash.com/photo-1621607511801-8df684e7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      about:"Lorrem Ipsum is simply dummy text of printing and typesetting industry"
    },
  ]



  return (
    
    <div id='swup' className='news transition-fade'>
      <h2>news <hr /></h2>
      <div className='news-trending'>
     {
        NewsData.map((val)=>{
            return(
       <div  
       className='news-services'>
         <motion.div 
             variants={container}
             initial="hidden"
             animate="visible"
             className='img'>
            <img src={val.img}  width="640" height="480" alt="..."  />
            </motion.div>
            <motion.div     variants={container}
       initial="hidden"
       animate="visible"
       className='news-text'>
       <span>{val.service}</span>
       <h3>{val.title}</h3>
       <h5>{val.about}</h5>
        </motion.div>
        </div>
            )
        })
     }
      </div>
    </div>
  )
}

export default HomeNews;

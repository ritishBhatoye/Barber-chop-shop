import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './chop-logo.png';
import { motion } from 'framer-motion';
const Header = () => {
  const FadeVarients = {
    hidden: { opacity: 0.5, scale: 0 },
    Fade: {
      fontSize: '1.1rem',
      x: 0.3,
      y: 10,
      transition: {
        type: 'spring',
        duration: 0.5,
        delay: 0.15,
        ease: [0.61, 1, 0.88, 1],
      },
    },
  };

  // const isLogIn = localStorage.getItem('isLogIn');
  // console.log('isLogIn', isLogIn);
  return (
    <div>
      <header className="header">
        <div className="Overlay">
          <div className="nav">
            <ul className="list-1">
              <motion.li variants={FadeVarients} initial="hide" animate="Fade">
                <Link to="/">HOME</Link>
              </motion.li>
              <motion.li variants={FadeVarients} initial="hide" animate="Fade">
                <img src={logo} width={'50%'} />
              </motion.li>
            </ul>
            <ul className="list-2">
              <motion.li variants={FadeVarients} initial="hide" animate="Fade">
                <Link to="/">SEARCH</Link>
              </motion.li>
              <motion.li variants={FadeVarients} initial="hide" animate="Fade">
                <Link to="/Menu">MENU </Link>
              </motion.li>
              {/* {isLogIn !== 'true' && (
                <>
                  <motion.li
                    variants={FadeVarients}
                    initial="hide"
                    animate="Fade"
                  >
                    <Link to="/login">LOGIN </Link>
                  </motion.li>
                  <motion.li
                    variants={FadeVarients}
                    initial="hide"
                    animate="Fade"
                  >
                    <Link to="/register">SIGN UP </Link>
                  </motion.li>
                </>
              )} */}
              {/*
              {isLogIn === 'true' && (
                <motion.li
                  variants={FadeVarients}
                  initial="hide"
                  animate="Fade"
                >
                  <a
                    onClick={async () =>
                      await localStorage.setItem('isLogIn', false)
                    }
                  >
                    LOG OUT{' '}
                  </a>
                </motion.li>
              )} */}
              <motion.span
                className="bg-brown-out align-line"
                variants={FadeVarients}
                animate="Fade"
              >
                <li>
                  <Link to="/reservation">RESERVATOIN</Link>
                </li>
              </motion.span>
            </ul>
          </div>
          <div className="center-content">
            <motion.h1
              initial={{ y: -500, opacity: 0 }}
              animate={{ opacity: 1, fontSize: '3rem', x: 0.3, y: 10 }}
              transition={{ type: 'spring', duration: 0.7, delay: 1.3 }}
            >
              CHOP BARBER SHOP
            </motion.h1>
            <motion.p initial="hide" variants={FadeVarients} animate="Fade">
              For Men only
            </motion.p>
          </div>
          <motion.footer initial="hide" variants={FadeVarients} animate="Fade">
            EN
          </motion.footer>
        </div>
      </header>
    </div>
  );
};

export default Header;

{
  /*import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "./chop-logo.png";
const Header = () => {
const [menu,setMenu]=useState(false);
const View=()=>
{
  setMenu(true);

}
const Hide=()=>
{
  setMenu(false);
}

  return (
    <div>
          <header style={{backgroundColor:View?null:"black"}}>
       <div className='Overlay'>
<div className="nav">
<ul className='list-1'>
<li><Link to="/Home">HOME</Link></li>
<li ><img src={logo} width={"50%"}/></li>
</ul>
<ul className='list-2'>
    <li><Link to="/">SEARCH</Link></li>
    <li><Link to="" onClick={View}>MENU
   {/* {menu?(<ul className='dropdown'
    onClick={View}>
<li>LIST-1</li>
<li>LIST-2</li>
<li>LIST-3</li>
<li>LIST-4</li>
<li>LIST-5</li>

  </ul>):null}
  </Link></li>
  <span className='bg-brown-out'><li><Link to="/Contact"  >RESERVATOIN</Link></li></span>
</ul>
  </div>
  <div className='center-content' style={{display:View?'none':'block'}}>
<h1>CHOP BARBER SHOP</h1>
<p>For Men only</p>
  </div>
  <footer>EN</footer>
  </div>
  </header>
  </div>
)
}

export default Header;*/
}

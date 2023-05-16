import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './chop-logo.png';
export const Menu = () => {
  const FadeVarients = {
    hidden: { opacity: 1, scale: 0 },
    Fade: {
      fontSize: '1.5rem',
      x: 0.3,
      y: 10,
      transition: {
        type: 'spring',
        duration: 0.55,
        delay: 0.15,
        ease: [0.61, 1, 0.88, 1],
      },
    },
  };

  const [menu, setMenu] = useState(false);
  const View = () => {
    setMenu(true);
  };
  const Hide = () => {
    setMenu(false);
  };
  const isLogIn = localStorage.getItem('isLogIn');

  return (
    <div>
      <header className="Menu-navbar">
        <div className="Menu-Overlay">
          <div className="Menu-nav">
            <ul className="List-1">
              <motion.li variants={FadeVarients} initial="hide" animate="Fade">
                <Link to="/">HOME</Link>
              </motion.li>
              <motion.li variants={FadeVarients} initial="hide" animate="Fade">
                <img src={logo} width={'50%'} />
              </motion.li>
            </ul>
            <ul className="List-2">
              <motion.li variants={FadeVarients} initial="hide" animate="Fade">
                <Link to="/">SEARCH</Link>
              </motion.li>
              <motion.li variants={FadeVarients} initial="hide" animate="Fade">
                <Link to="/" onClick={View}>
                  MENU
                </Link>
              </motion.li>
              {isLogIn !== 'true' && (
                <>
                  <motion.li
                    variants={FadeVarients}
                    initial="hide"
                    animate="Fade"
                  >
                    <Link to="/login">LOG IN</Link>
                  </motion.li>
                  <motion.li
                    variants={FadeVarients}
                    initial="hide"
                    animate="Fade"
                  >
                    <Link to="/register">SIGN UP</Link>
                  </motion.li>
                </>
              )}
              {isLogIn === 'true' && (
                <motion.li
                  variants={FadeVarients}
                  initial="hide"
                  animate="Fade"
                >
                  <a
                    href="/"
                    onClick={async () =>
                      await localStorage.setItem('isLogIn', false)
                    }
                  >
                    LOG OUT
                  </a>
                </motion.li>
              )}
              <motion.span
                variants={FadeVarients}
                initial="hide"
                animate="Fade"
                className="bg-brown-out"
              >
                <li>
                  <Link to="/reservation">RESERVATION</Link>
                </li>
              </motion.span>
            </ul>
          </div>
          <div className="center-content">
            <ul>
              <motion.li
                initial={{ y: -500, opacity: 0 }}
                animate={{ opacity: 1, fontSize: '3rem', x: 0.3, y: 10 }}
                transition={{ type: 'spring', duration: 0.7, delay: 1.3 }}
              >
                <Link to="/">HOME</Link>
              </motion.li>
              <motion.li
                initial={{ y: -500, opacity: 0 }}
                animate={{ opacity: 1, fontSize: '3rem', x: 0.3, y: 10 }}
                transition={{ type: 'spring', duration: 0.7, delay: 1.3 }}
              >
                <Link to="/about">ABOUT US</Link>
              </motion.li>
              <motion.li
                initial={{ y: -500, opacity: 0 }}
                animate={{ opacity: 1, fontSize: '3rem', x: 0.3, y: 10 }}
                transition={{ type: 'spring', duration: 0.7, delay: 1.3 }}
              >
                <Link to="/services">SERVICES</Link>
              </motion.li>
              <motion.li
                initial={{ y: -500, opacity: 0 }}
                animate={{ opacity: 1, fontSize: '3rem', x: 0.3, y: 10 }}
                transition={{ type: 'spring', duration: 0.7, delay: 1.3 }}
              >
                <Link to="/gallery">GALLERY</Link>
              </motion.li>
              <motion.li
                initial={{ y: -500, opacity: 0 }}
                animate={{ opacity: 1, fontSize: '3rem', x: 0.3, y: 10 }}
                transition={{ type: 'spring', duration: 0.7, delay: 1.3 }}
              >
                <Link to="/news">NEWS</Link>
              </motion.li>
              <motion.li
                initial={{ y: -500, opacity: 0 }}
                animate={{ opacity: 1, fontSize: '3rem', x: 0.3, y: 10 }}
                transition={{ type: 'spring', duration: 0.7, delay: 1.3 }}
              >
                <Link to="/contact">CONTACTS</Link>
              </motion.li>
              <div className="Menu-nav-footer">
                <ul>
                  <motion.li
                    variants={FadeVarients}
                    initial="hide"
                    animate="Fade"
                    className="pad-2"
                  >
                    <Link to="/terms-and-conditions">TERMS & CONDITIONS</Link>
                  </motion.li>
                  <motion.li
                    variants={FadeVarients}
                    initial="hide"
                    animate="Fade"
                    className="pad-2"
                  >
                    <Link to="/privacy-policy">PRIVACY POLICY</Link>
                  </motion.li>
                  {/*<p>© 2022 Beauty Salon JS Template by Ritish</p>*/}
                </ul>
              </div>
            </ul>
          </div>

          <footer>EN</footer>
        </div>
      </header>
    </div>
  );
};
export default Menu;

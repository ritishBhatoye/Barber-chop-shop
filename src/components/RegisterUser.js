import React from 'react';
import { Footer } from './Footer/Footer';
import StaticHeader from './STATICHeader/StacticHeader';
/*import {useState,setState} from 'react';*/
import { useState } from 'react';
import { useRef } from 'react';

import axios from './utils/api';

const RegisterUser = () => {
  const [loading, setLoading] = useState(false);

  const email = useRef();
  const password = useRef();
  const phoneNumber = useRef();
  const fullName = useRef();

  const handleSubmit = async () => {
    setLoading(true);
    const values = {
      email: email?.current?.value,
      password: password?.current?.value,
      phoneNumber: phoneNumber?.current?.value,
      fullName: fullName?.current?.value,
    };

    if (!values.email) {
      alert('Please enter your email!');
    } else if (!values.password) {
      alert('Please enter your password!');
    } else if (!values.phoneNumber) {
      alert('Please enter your mobile number!');
    } else if (!values.fullName) {
      alert('Please enter your name!');
    } else {
      await axios
        .post('/register', JSON.stringify(values))
        .then(function (response) {
          alert('Register Successfully!!');
          setTimeout(() => {
            setLoading(false);
            window.location.replace('/');
          }, 400);
        })
        .catch(function (error) {
          setLoading(false);
          alert('Error: Something went wrong!');
        });
      setLoading(false);
    }
  };

  return (
    <>
      <StaticHeader />
      <div className="Contact">
        <h1>CREATE AN ACCOUNT</h1>
        <div className="Contact-message">
          <h2>LET’S TALK OR BOOK NOW</h2>
        </div>
        <div className="Contact-grid">
          <div className="Contact-details">
            <ul>
              <li>
                <p>
                  <a href="mailto:ritishrahul87">RitishRahul87@gmail.com</a>
                </p>
                <h6>EMAIL</h6>
              </li>
              <li>
                <p>36 M St, New York, 152, USA</p>
                <h6>ADDRESS</h6>
              </li>
              <li>
                <p>
                  {' '}
                  <a href="tel:+05890000111">0050 (5325) 535-0539</a>
                </p>
                <h6>PHONE</h6>
              </li>
            </ul>
          </div>
          <div className="Contact-person-details">
            <div className="flex-1">
              <form action="view()" method="POST">
                <span>
                  <label for="name">NAME AND SURNAME *</label>
                  <br />
                </span>
                <span>
                  <input
                    style={{ width: '100%' }}
                    type="text"
                    placeholder="Your name here"
                    id="name"
                    ref={fullName}
                  />
                </span>
                <div>
                  <label for="phone">ENTER PHONE NUMBER:</label>
                  <br />
                  <input
                    type="tel"
                    style={{ width: '100%' }}
                    placeholder="Your phone here"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    ref={phoneNumber}
                  ></input>
                </div>
                <span>
                  <label for="name">ENTER EMAIL *</label>
                  <br />
                </span>
                <span>
                  <input
                    style={{ width: '100%' }}
                    type="text"
                    placeholder="Enter your email"
                    id="email"
                    ref={email}
                  />
                </span>
                <div>
                  <label for="phone">ENTER PASSWORD *</label>
                  <br />
                  <input
                    type="password"
                    style={{ width: '100%' }}
                    name="password"
                    placeholder="Enter your password"
                    ref={password}
                  ></input>
                </div>
              </form>
              <button
                style={{ marginTop: '4rem' }}
                disabled={loading}
                type="submit"
                className="footer-button"
                onClick={handleSubmit}
              >
                {loading ? 'Loading...' : 'SUBMIT'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterUser;

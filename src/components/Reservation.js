import React from 'react';
/*import {useState,setState} from 'react';*/
import { useRef } from 'react';
import StaticHeader from './STATICHeader/StacticHeader';
import { Footer } from './Footer/Footer';

const Reservation = () => {
  const Name = useRef();
  const Phone = useRef();
  const Message = useRef();
  const Option = useRef();
  const Date = useRef();
  const handleSubmit = () => {
    console.log('COSTUMER NAME : ', Name.current.value, '');
    console.log('COSTUMER PHONE : ', Phone.current.value, '');
    console.log('COSTUMER MESSAGE : ', Message.current.value, '');
    console.log('COSTUMER DATE : ', Date.current.value, '');
    console.log('SELECTED SERVICE : ', Option.current.value, '');
    alert('COSTUMER INFO SENT SUCCESSFULLY!!!');
  };
  return (
    <>
      <StaticHeader />
      <div className="Contact">
        <h1>CONTACTS</h1>
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
                  <label for="name">NAME AND SURENAME *</label>
                  <br />
                </span>
                <span>
                  <input
                    type="text"
                    placeholder="Your name here"
                    id="name"
                    ref={Name}
                  />
                </span>
                <label for="phone">Enter your phone number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone here"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  ref={Phone}
                ></input>
                <p>
                  <label for="message">MESSAGE:</label>
                </p>
                <textarea
                  ref={Message}
                  placeholder="Your message here"
                ></textarea>
              </form>
              <button
                type="submit"
                className="footer-button"
                onClick={handleSubmit}
              >
                BOOK NOW
              </button>
            </div>
            <div className="flex-2">
              <form>
                <label> SELECT SERVICE </label>
                <br />
                <select class="select" name="option" ref={Option}>
                  <option value="" className="disabled" disabled selected>
                    Haircut
                  </option>
                  <option value="1">Haircut</option>
                  <option value="2">Shave</option>
                  <option value="3">Haircut & Shave</option>
                  <option value="4">Beard Trim</option>
                </select>
                <label for="appointment">CHOOSE AN APPOINTMENT DATE</label>
                <input
                  type="date"
                  ref={Date}
                  className="max-length"
                  name="appointment"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reservation;

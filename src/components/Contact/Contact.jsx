import React, { useEffect } from 'react';
import { Footer } from '../Footer/Footer';
import StaticHeader from '../STATICHeader/StacticHeader';
/*import {useState,setState} from 'react';*/
import { useState, setState } from 'react';
import { useRef } from 'react';
import { createContact } from '../utils/helper.js';

import axios from '../utils/api';

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  // var view = () => {
  //   var name = document.getElementById('name').value;
  //   var phone = document.getElementById('phone').value;
  //   console.log('COSTUMER NAME : ' + name);
  //   console.log('COSTUMER PHONE : ' + phone);
  // };

  /*const [user,setUser]=useState(
      {name:"",email:"",phone:"",service:"",date:"",message:""}
    );
    let name,value;
    const handleInputs=(e)=>{
      console.log(e)
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value})
    }
    */
  // const [Name, setName] = useState(null);
  // const [phone,setPhone] = useState(null);
  // const [message,setMessage]=useState(null);

  // const handleInputChange = (e) => {
  //     const {id , value} = e.target;
  //     if(id === "Name"){
  //         setFirstName(value);
  //     }

  //     if(id === "email"){
  //         setEmail(value);
  //     }
  //     if(id === "password"){
  //         setPassword(value);
  //     }
  //     if(id === "confirmPassword"){
  //         setConfirmPassword(value);
  //     }

  // }

  // const handleSubmit  = () => {
  //     console.log(firstName,lastName,email,password,confirmPassword);
  // }
  const Name = useRef();
  const Phone = useRef();
  const Message = useRef();

  const handleSubmit = async () => {
    // console.log('COSTUMER NAME : ', Name.current.value, '');
    // console.log('COSTUMER PHONE : ', Phone.current.value, '');
    // console.log('COSTUMER MESSAGE : ', Message.current.value, '');

    // alert('COSTUMER INFO SENT SUCCESSFULLY!!!');
    setLoading(true);
    const values = {
      name: Name?.current?.value,
      telephone: Phone?.current?.value,
      message: Message?.current?.value,
    };

    if (!values.name) {
      alert('Please enter your name!');
    } else if (!values.telephone) {
      alert('Please enter your phone number!');
    } else if (!values.message) {
      alert('Please enter your message!');
    } else {
      // try {
      //   await createContact(values);
      //   alert('Details Submit Successfully!!');
      //   setTimeout(() => {
      //     setLoading(false);
      //     window.location.reload(false);
      //   }, 400);
      // } catch (error) {
      //   setLoading(false);
      //   alert('Error: Something went wrong!');
      // }

      await axios
        .post('/contact', JSON.stringify(values))
        .then(function (response) {
          alert('Details Submit Successfully!!');
          setTimeout(() => {
            setLoading(false);
            window.location.reload(false);
          }, 400);
        })
        .catch(function (error) {
          setLoading(false);
          alert('Error: Something went wrong!');
        });
      setLoading(false);
    }

    // try {
    //   await createContact(values);
    //   alert('Details Submit Successfully!!');
    // } catch (error) {
    //   alert('Error: Something went wrong!');
    // }
  };

  // useEffect(() => {

  // }, []);

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
                    style={{ width: '100%' }}
                    type="text"
                    placeholder="Your name here"
                    id="name"
                    ref={Name}
                  />
                </span>
                <div>
                  <label for="phone">ENTER PHONE NUMBER:</label>
                  <br />
                  <input
                    type="tel"
                    style={{ width: '100%' }}
                    id="phone"
                    name="phone"
                    placeholder="Your phone here"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    ref={Phone}
                  ></input>
                </div>
                <p>
                  <label for="message">MESSAGE:</label>
                </p>
                <textarea
                  ref={Message}
                  placeholder="Your message here"
                ></textarea>
              </form>
              <button
                disabled={loading}
                type="submit"
                className="footer-button"
                onClick={handleSubmit}
              >
                {loading ? 'Loading...' : 'SUBMIT'}
              </button>
            </div>
            {/* <div className="flex-2">
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
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

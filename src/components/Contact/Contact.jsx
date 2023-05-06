import React from 'react'
import { Footer } from '../Footer/Footer'
import StaticHeader from '../STATICHeader/StacticHeader'
/*import {useState,setState} from 'react';*/
import {useState,setState} from "react";
import { useRef } from 'react'

export const Contact = () => {
var view=()=>{
  var name = document.getElementById("name").value;
  var phone= document.getElementById("phone").value;
  console.log("COSTUMER NAME : "+name);
  console.log("COSTUMER PHONE : "+phone);

}
    
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
    const Name=useRef();
    const Phone=useRef();
    const Message=useRef();
    const Option=useRef();
    const Date=useRef();
    const handleSubmit=()=>{
      console.log("COSTUMER NAME : ",Name.current.value,"");
      console.log("COSTUMER PHONE : ",Phone.current.value,"");
      console.log("COSTUMER MESSAGE : ",Message.current.value,"");
      console.log("COSTUMER DATE : ",Date.current.value,"");
      console.log("SELECTED SERVICE : ",Option.current.value,"");
      alert("COSTUMER INFO SENT SUCCESSFULLY!!!");
    }
  return (
    <>
    <StaticHeader />
    <div className='Contact'>
        <h1>CONTACTS</h1>
        <div className='Contact-message'><h2>LET’S TALK OR BOOK NOW</h2></div>
        <div className='Contact-grid'>
        <div className='Contact-details'>
      <ul>
        <li>
            <p><a href="mailto:ritishrahul87">RitishRahul87@gmail.com</a></p>
            <h6>EMAIL</h6>
        </li>
        <li>
            <p>36 M St, New York, 152, USA</p>
            <h6>ADDRESS</h6>
        </li>
        <li>
            <p>  <a href="tel:+05890000111">0050 (5325) 535-0539</a></p>
            <h6>PHONE</h6>
        </li>
      </ul>
        </div>
        <div className='Contact-person-details'>
         <div className='flex-1'>
         <form action="view()" method="POST">
  <span><label for="name" >NAME AND SURENAME *</label><br/></span>
  <span><input type="text"  placeholder='Your name here'
  id="name"
  ref={Name}
  /></span>
  <label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" placeholder='Your phone here' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
 ref={Phone}
></input>
<p><label for="message">MESSAGE:</label></p>
  <textarea ref={Message} placeholder='Your message here'></textarea>
</form>
<button type='submit' className='footer-button' onClick={handleSubmit}>BOOK NOW</button>
</div>
 <div className='flex-2'>
  <form>
   <label> SELECT SERVICE </label><br/>
  <select class="select" name="option" ref={Option}  >
  <option value="" className='disabled' disabled selected>Haircut</option>
  <option value="1">Haircut</option>
  <option value="2">Shave</option>
  <option value="3">Haircut & Shave</option>
  <option value="4">Beard Trim</option>
</select>
<label for="appointment">CHOOSE AN APPOINTMENT DATE</label>
<input type="date" ref={Date} className='max-length' name="appointment"/>

  </form>

         </div>
         
         </div>        
       </div>
    </div>
<Footer/>
    </>
  )
}

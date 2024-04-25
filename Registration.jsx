import React, { useState } from 'react';
import './registration.css';  

import user_icon from '../Assets/Person.png';
import mail_icon from '../Assets/Mail.png';
import password_icon from '../Assets/Password.png';

const RegistrationPage = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className='Container'>
      <div className='header'>
        <div className="Main">HyperLMS</div>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Matric Number" />
        </div>
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="input">
                    <img src={mail_icon} alt="" />
                    <input type="email" placeholder="Email ID" />
                </div>
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="Faculty" placeholder="Faculty Name" />
        </div>
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="Semester" placeholder="Semester" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
    
      <div className="submit-container">
        
        <div className={action === "Sign Up" ? "submit gray" : "submit"} >Sign Up</div>
      </div>
    </div>
  );
};

export default RegistrationPage;

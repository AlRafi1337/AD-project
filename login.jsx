import React, { useState } from 'react';
import './login.css'

import user_icon from '../Assets/Person.png'
import mail_icon from '../Assets/Mail.png'
import password_icon from '../Assets/Password.png'

const LoginPage = () => {

const [action,setAction] = useState("Sign Up")
    return (
        <div className='Container' >
            <div className='header' >
            <div className="Main">HyperLMS</div>
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>: <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}
               
                
                <div className="input">
                    <img src={mail_icon} alt="" />
                    <input type="email" placeholder="Email ID" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password"/>
                </div>
            </div> 
            <div className="forgot-password">Lost Password? <span>
                Click Here!</span></div>
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    );
};

export default LoginPage;


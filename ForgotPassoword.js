import React, { useState } from 'react';
import './forgotPassword.css'; 
import mail_icon from '../Assets/Mail.png'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    
    //  let's assume a successful reset.
    setMessage('Password reset email sent successfully!');
  };

  return (
    <div className="Container">
      <div className="header">
        <div className="Main">HyperLMS</div>
        <div className="text">Forgot Password</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={mail_icon} alt="" />
          <input
            type="email"
            placeholder="Enter your Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="message">{message}</div>
      <div className="submit-container">
        <div className="submit" onClick={handleResetPassword}>
          Reset Password
        </div>
      </div>
      <div className="back-to-login">
        <span>Remember your password?</span> <a href="/login">Login here</a>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

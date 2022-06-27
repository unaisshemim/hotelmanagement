import React, { useRef, useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import './login.scss'
import { auth } from "../../firebase";
import signInWithEmailAndPassword from 'firebase/auth'
import Navbar from '../navbar/Navbar'
function Login() {

  
  return (<div>
<Navbar/>
    <div className="login">
      <div className="top"></div>
      <div className="loginContainer">
        <div className="loginDetails">
          <div className="title">When the Dreams comes True</div>
          <div className="details">
            <div className="email">
              <label htmlFor="">Email/phone</label>
              <input type="text" />
            </div>
            <div className="password">
              <label htmlFor="">Password</label>
              <input type="password" />
            </div>
            <div className="forgot">
            
              <a href="/forgot">forgot your password</a>
            </div>
            <div className="Buttons">
              <button style={{backgroundColor:'teal',color:'white'}}type ="submit" >LOGIN</button>
              <button>CREATE ACCOUNT </button>
            </div>
            <div className="otherLogins">
                <a href="/f"><GoogleIcon fontSize="large"/></a>
                <a href="/d"><FacebookIcon fontSize="large"/></a>
             </div>
          </div>
        </div>
        <div className="hotelPic">
         
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;

import React from 'react'
import "./VerifyEmail.css"
import { useNavigate } from 'react-router-dom'
export const VerifyEmail = () => {
    const navigate=useNavigate();
  return (
    <div>
    <img src="./assets/istockphoto-1191918617-612x612-removebg-preview.png" alt="logo" id="logo"/>
    <div class="container">
        <div class="aside">
        <div class="input">
        <div class="header"><h4>VERIFY OTP</h4></div>
            <label for="OTP">OTP</label>
            <input type="text" id="OTP"/><br/>
            <button onClick={()=>navigate('/login')} id="btn" action="#">SUBMIT</button>
        </div>
        </div>
    </div>
   
</div>
  )
}

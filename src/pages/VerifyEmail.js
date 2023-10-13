import React from 'react'
import "./VerifyEmail.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
export const VerifyEmail = () => {
    const navigate=useNavigate();
  return (
    <div className="flex mx-auto px-[330px] ">
    <img src="img/logo.png" alt="logo" id="logo"/>
    <div class="container">
        <div class="aside">
        <div class="input">
        <div className="mt-[200px] ">
        <div class="header"><h4>VERIFY OTP</h4></div>
            <label for="OTP">OTP</label>
            <input type="text" id="OTP"/><br/>
            <button onClick={()=>{
                
                navigate('/login');
            }} id="btn" action="#">SUBMIT</button>
        </div>
        </div>
        </div>
    </div>
   
</div>
  )
}

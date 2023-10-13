import React from 'react'
import "./VerifyEmail.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {toast} from "react-hot-toast"
export const VerifyEmail = () => {
    const navigate=useNavigate();
  return (
    <div className="flex mx-auto px-[330px] bg-sky-300 h-[700px] ">
    <img src="img/logo.png" className="w-[500px] " alt="logo" id="logo"/>
    <div class="container">
        <div class="aside">
        <div class="input">
        <div className="mt-[200px] flex flex-col gap-[20px] ">
        <div class="header font-extrabold text-[30px] "><h4>VERIFY OTP</h4></div>
            <label for="OTP">OTP</label>
            <input type="text" className=" bg-zinc-500" placeholder="  Enter your otp" id="OTP"/><br/>
            <button className="bg-green-600 w-[100px] px-[15px] rounded-lg" onClick={()=>{
                toast.success("Successfully verified.")
                navigate('/login');
            }} id="btn" action="#">SUBMIT</button>
        </div>
        </div>
        </div>
    </div>
   
</div>
  )
}

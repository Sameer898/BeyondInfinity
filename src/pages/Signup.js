import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../slices/authSlice';
import { useState } from 'react';
export const Signup = () => {
    const navigate=useNavigate();
    const {type}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();
    const [flag,setFlag]=useState(true);

    const handleFlag=()=>{
        setFlag(!flag);
    }
  return (
    <div className="body flex bg-sky-300 h-[700px] ">
    
    
    <div className="div1 flex mx-auto" >
        <div>
        <img src="img/logo.png" alt="logo"/>
        </div>
        <br/>
        <div  className="div2 mt-[140px] flex flex-col gap-[20px] ">
            <h1 className="h1 font-extrabold text-[30px] ">Sign Up</h1>
            <div className="div5 flex gap-[25px] w-[80px] text-white pl-[9px] ">
                <div>
                    <button className={`hover ${flag ? " bg-blue-300":"bg-sky-950"} `} onClick={()=>{
                        dispatch(setType(true));
                        handleFlag();
                    }} type="text"  placeholder="Patient">Patient</button>
                </div>
                <div>
                    <button className={`hover gap-[25px] w-[100px] ${flag ? " bg-sky-950":"bg-blue-300"}  text-white pl-[9px]`} onClick={()=>{
                        dispatch(setType(false));
                        handleFlag();
                    }}  type="text"  placeholder="Caretaker">Caregiver</button>
                </div>
            </div>
            <p><label>Email :</label><input className="ml-[50px] input bg-slate-300 rounded-lg px-[10px] " type="text" name="name" placeholder="Enter the email" required/></p>
            <p><label>Password :</label><input className="ml-[20px] input bg-slate-300 rounded-lg px-[10px] " type="password" name="name" placeholder="Enter the password" required/></p>
            <p><label>Confirm Password :</label><input className="ml-[10px] input bg-slate-300 rounded-lg px-[10px] " type="password" name="name" placeholder="Enter the confirm password" required/></p>
             <a  href="ForgotPassword" className="text-blue-900 font-bold ">ForgotPassword?</a> 
            <br/>
            <div className="div3 ">
                <input className="bg-green-600 w-[100px] px-[15px] rounded-lg" onClick={()=>navigate("/verifyEmail")} value="Sign Up"/>
            </div>
            <br/>
            <br/>
            
        </div>
        <br/>
        <br/>
    </div>
</div>
  )
}

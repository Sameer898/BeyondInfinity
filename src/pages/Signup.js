import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../slices/authSlice';
export const Signup = () => {
    const navigate=useNavigate();
    const {type}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();
  return (
    <div class="body">
    
    
    <div class="div1" >
        <div>
        <img src="img/logo.png" alt="logo"/>
        </div>
        <br/>
        <div  class="div2">
            <h1 class="h1">Sign In</h1>
            <div class="div5">
                <div>
                    <button class="hover" onClick={()=>{
                        dispatch(setType(true));
                    }} type="text"  placeholder="Patient">Patient</button>
                </div>
                <div>
                    <button class="hover" onClick={()=>{
                        dispatch(setType(false));
                    }}  type="text"  placeholder="Caretaker">Caretaker</button>
                </div>
            </div>
            <p><input class="input" type="text" name="name" placeholder="Email" required/></p>
            <p><input class="input" type="password" name="name" placeholder="password" required/></p>
            <p><input class="input" type="text" name="name" placeholder="Mobile Number" required/></p>
             <a  href="ForgotPassword">ForgotPassword?</a> 
            <br/>
            <div class="div3">
                <input class="hover" onClick={()=>navigate("/verifyEmail")} value="Sign In"/>
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

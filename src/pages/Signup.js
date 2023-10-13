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
    <div className="body flex bg-sky-300 h-[700px] ">
    
    
    <div className="div1 flex mx-auto" >
        <div>
        <img src="img/logo.png" alt="logo"/>
        </div>
        <br/>
        <div  className="div2 mt-[140px] flex flex-col gap-[20px] ">
            <h1 className="h1 font-extrabold text-[30px] ">Sign In</h1>
            <div className="div5 flex gap-[25px] w-[80px] bg-blue-200 text-white pl-[9px] ">
                <div>
                    <button className="hover" onClick={()=>{
                        dispatch(setType(true));
                    }} type="text"  placeholder="Patient">Patient</button>
                </div>
                <div>
                    <button className="hover gap-[25px] w-[100px] bg-sky-950 text-white pl-[9px]" onClick={()=>{
                        dispatch(setType(false));
                    }}  type="text"  placeholder="Caretaker">Caretaker</button>
                </div>
            </div>
            <p><label>Email :</label><input className="ml-[50px] input bg-slate-300 rounded-lg px-[10px] " type="text" name="name" placeholder="Enter the email" required/></p>
            <p><label>Password :</label><input className="ml-[20px] input bg-slate-300 rounded-lg px-[10px] " type="password" name="name" placeholder="Enter the password" required/></p>
            <p><label>Confirm Password :</label><input className="ml-[10px] input bg-slate-300 rounded-lg px-[10px] " type="text" name="name" placeholder="Enter the confirm password" required/></p>
             <a  href="ForgotPassword" className="text-blue-900 font-bold ">ForgotPassword?</a> 
            <br/>
            <div className="div3 ">
                <input className="bg-green-600 w-[100px] px-[15px] rounded-lg" onClick={()=>navigate("/verifyEmail")} value="Sign In"/>
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

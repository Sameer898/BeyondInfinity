import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {toast} from "react-hot-toast"
export const Login  = () => {
    const navigate=useNavigate();
    const {type}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();
  return (
    <div className="body flex bg-sky-300 h-[700px] py-[60px] ">
    
    
    <div className="div1 flex mx-auto" >
        <div>
        <img src="./img/logo.png"   alt="logo"/>
        </div>
        <br/>
        <div  className="div2 mt-[140px] flex flex-col gap-[20px]">
            <h1 className="h1 font-extrabold text-[30px]">Login</h1>
            <p><label>Email :</label><input className="ml-[50px] input bg-slate-300 rounded-lg px-[10px] " type="text" name="name" placeholder="Enter the email" required/></p>
            <p><label>Password :</label><input className="ml-[20px] input bg-slate-300 rounded-lg px-[10px] " type="password" name="name" placeholder="Enter the password" required/></p>
            <a  href="ForgotPassword text-blue-900 font-bold">ForgotPassword?</a>
            <br/>
            <br/>
            <div className="div3 flex gap-[10px] ">
                <div>
                    <input className="hover bg-green-600 w-[100px] px-[15px] rounded-lg" onClick={()=>{
                        if(type){
                            toast.success("Successfully Login");
                            navigate("/myprofile");
                        }else{
                            toast.success("Successfully Login");
                            navigate("/caregivier")
                        }
                    }}   value="Login"/>
                </div>
                <br/>
                <div>
                    <input className="hover bg-green-600 w-[100px] px-[15px] rounded-lg" onClick={()=>navigate("/signup")} value="Signup"/>
                </div>
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

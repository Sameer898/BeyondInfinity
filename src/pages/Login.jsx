import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
export const Login  = () => {
    const navigate=useNavigate();
  return (
    <div className="body">
    
    
    <div className="div1" >
        <div>
        <img src="./img/logo.png"   alt="logo"/>
        </div>
        <br/>
        <div  className="div2 ">
            <h1 className="h1">Login</h1>
            <p><input className="input" type="text" name="name" placeholder="Email" required/></p>
            <p><input className="input" type="password" name="name" placeholder="password" required/></p>
            <a  href="ForgotPassword">ForgotPassword?</a>
            <br/>
            <br/>
            <div className="div3">
                <div>
                    <input className="hover" onClick={()=>navigate('/myprofile')}   value="Login"/>
                </div>
                <br/>
                <div>
                    <input className="hover" onClick={()=>navigate("/signup")} value="Signup"/>
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

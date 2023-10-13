import React from 'react'
import {toast} from "react-hot-toast";
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
export const Blood = () => {
    const [flag,setFlag]=useState(true);
    const navigate =useNavigate();
  return (
    <div className='relative'>
         
    <div
      className="ud-header absolute top-0 left-0 bg-[#3056D3] z-40 flex w-full items-center">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="index.html" className="navbar-logo block w-full py-5">
              <img
                src="https://media.istockphoto.com/id/1191918617/vector/blue-infinity-vector-logo-template-illustration-design-vector-eps-10.jpg?s=612x612&w=0&k=20&c=MpIcp6ll_Av7TMNlubDuIs47774kLjlxRoY4toypNBc="
                alt="logo"
                className="header-logo w-[80px] rounded-md"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
              </button>
              <nav
                id="navbarCollapse"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
              >
                <ul className="blcok lg:flex">
                  <li className="group relative">
                    <a
                      href="#home"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group relative">
                    <a
                      href="#about"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      About
                    </a>
                  </li>
                  <li className="group relative">
                    <a
                      href="#pricing"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Services
                    </a>
                  </li>
                  <li className="group relative">
                    <a
                      href="#team"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Team
                    </a>
                  </li>
                  <li className="group relative">
                    <a
                      href="#contact"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="submenu-item group relative">
                    <a
                      href="/blood"
                      className="relative mx-8 flex py-2 text-base text-dark after:absolute after:right-1 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current group-hover:text-primary lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:after:right-0 lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Need Blood
                    </a>
                    
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/login"
                className="loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70"
              >
                Login
              </a>
              <a
                href="/signup"
                className="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
      
    
    </div>


        {
            flag && 
            <div className='w-full h-[700px] bg-[#3056D3]'>

<div className='w-[700px] text-white h-[100px] py-[150px] px-[73px] text-[47px] '>
Find Blood Provider
</div>
<div className='flex'>
<div className='px-[100px] -py-[180px] w-[400px] h-[25px] text-[20px] text-white '>
Blood Group
</div>
<input placeholder="  Enter the blood group"></input>

</div>
<div className='flex '>
<div className='px-[100px] mt-[20px] -py-[150px] w-[400px] h-[25px] text-[20px] text-white '>
Quantity
</div>
<input className='mt-[20px]' placeholder="  Enter the quantity"></input>

</div>

<div className='flex '>
<div className='px-[100px] mt-[20px] -py-[150px] w-[400px] h-[25px] text-[20px] text-white '>
State
</div>
<input className='mt-[20px]' placeholder="  Enter the State"></input>

</div>

<div className='flex '>
<div className='px-[100px] mt-[20px] -py-[150px] w-[400px] h-[25px] text-[20px] text-white '>
District
</div>
<input className='mt-[20px]' placeholder="  Enter the district"></input>

</div>

<div className='flex '>
<div className='px-[100px] mt-[20px] -py-[150px] w-[400px] h-[25px] text-[20px] text-white '>
City
</div>
<input className='mt-[20px]' placeholder="  Enter the City"></input>

</div>

<button onClick={()=>{
    setFlag(false);
}} className=' ml-[100px] mt-[50px] w-[198px] h-[40px] rounded-[2px] bg-[#21F8DE] text-black'>Check Avialability</button>


</div>
        }

        {
            !flag && 
            <div className='w-full h-[700px] bg-[#3056D3]'>

<div className='w-[700px] text-white h-[100px] py-[150px] px-[73px] text-[47px] '>
Congratulations ,<br/> Blood is Available.
</div>
<div className='flex'>
            <img src="https://th.bing.com/th/id/OIP.SzixlF6Io24jCN67HHZulAHaLH?w=143&h=215&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="w-[190px] h-[190px] rounded-xl ml-[67px] ">

            </img>
            <img src="https://th.bing.com/th/id/OIP.Q_vZZcSYOaPMcxnXMQQ99QHaE8?w=296&h=197&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="w-[190px] h-[190px] rounded-xl ml-[67px] "></img>
            <img src="https://th.bing.com/th/id/OIP.-d8GY5axNJZYoXsNOUJ4iwAAAA?w=189&h=189&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="w-[190px] h-[190px] rounded-xl ml-[67px] "></img>
            <img src="https://th.bing.com/th/id/OIP.X9gYA6VDsnaSpMqBOWKH5wHaGv?w=223&h=203&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="w-[190px] h-[190px] rounded-xl ml-[67px] "></img>
</div>
<div className='ml-[80px] mt-[10px] w-[700px] text-white h-[100px]  text-[15px]'>4 Volunteers available to fulfill the blood requirement</div>
<button onClick={()=>{
    toast.success("Payment Successful");
    navigate("/");
    
}} className=' ml-[100px] mt-[50px] w-[198px] h-[40px] rounded-[2px] bg-[#21F8DE] text-black'>Proceed to Pay</button>


</div>
            
           
        }
   

</div>


  
  )
}

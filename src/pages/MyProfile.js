import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'

export const MyProfile = () => {
  return (
    <div>
    <Navbar/>
      <div className="flex">
    <div className="w-[272px] h-[862px] bg-[#010B13] text-center py-[76px] px-[-10px] border-[1px] text-white ">
        <div className=' "'><Link to="/myprofile">Profile</Link></div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] ">--------------------</div>
        <div className='"'><Link to="/search">Search</Link></div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] ">--------------------</div>
        <div className=' '><Link to="/authentication">Authentication</Link></div>
        <div className="w-[194px] text-center mt-[200px] ml-[45px] text-center ">--------------------</div>
       <div className="">Setting</div>
    </div>

    <div className="w-[1164px] h-[860px] top-[78px] left-[282px] text-[#010B13] ">
        <div className=""></div>
    </div>

    </div>

    </div>
  
  )
}

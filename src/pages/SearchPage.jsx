import React from 'react'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'
export const SearchPage = () => {
    const bigData=[
        {
            name:"Service",
            place:"Enter the service"
        },
        {
            name:"City",
            place:"Enter the city"
        },
        {
            name:"State",
            place:"Enter the State"
        },
        {
            name:"Address",
            place:"Enter the address"
        },{
            name:"Pin Code",
            
        }
    ]
  return (
    <div>
    <Navbar/>
    <div className='flex'>
    <div className="w-[272px] h-[862px] bg-[#010B13] text-center py-[76px] px-[-10px] border-[1px] text-white ">
        <div className=' "'><Link to="/myprofile">Profile</Link></div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] ">--------------------</div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] "></div>
        <div className='"'><Link to="/search">Search</Link></div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] ">--------------------</div>
        <div className=' '><Link to="/authentication">Authentication</Link></div>
        <div className="w-[194px] text-center mt-[200px] ml-[45px] text-center ">--------------------</div>
       <Link to="/setting" className="">Setting</Link>
    </div>

    <div className="w-[1164px] h-[860px] top-[1108px] left-[272px] bg-[#010B13] ">
    <div className="ml-[30px] w-[165px] h-[58px] top-[1127px] left-[377px] font-inter font-[700px] text-[48px] leading-[58px] text-white">Search</div>
    <div className="ml-[30px] w-[404px] mt-[20px] top-[169px] left-[352px] border-[1px] text-white "></div>

    <div className="ml-[30px] mt-[50px] w-[525px] h-[552px] top-[1257px] left-[370px] rounded-[8px] border-[1px] bg-[#010B13] text-white">
            
    </div>

    </div>

    </div>
    

    </div>
  )
}

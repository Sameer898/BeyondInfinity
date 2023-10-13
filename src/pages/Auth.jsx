import React from 'react'
import { Navbar } from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
export const Auth = () => {
    const navigate=useNavigate();
    const {type}=useSelector((state)=>(state).auth);
  return (
    <div>
        <Navbar/>
        <div className='flex bg-[#010B13]'>
    <div className="w-[272px] h-[862px] bg-[#010B13] text-center py-[76px] px-[-10px] border-[1px] text-white ">
        <div className=' "'><Link to={`${type?"/myprofile":"/caregivier"}`}>Profile</Link></div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] ">--------------------</div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] "></div>
        <div className='"'><Link to="/search">Search</Link></div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] ">--------------------</div>
        <div className=' '><Link to="/authentication">Authentication</Link></div>
        <div className="w-[194px] text-center mt-[200px] ml-[45px] text-center ">--------------------</div>
       <Link to="/setting" className="">Setting</Link>
    </div>

    <div className="ml-[30px] mt-[50px] w-[1164px]   h-[860px] top-[2143px] left-[261px] bg-[#010B">
                <div className='w-[525px] h-[378px] top-[2299px] left-[329px] border-[1px] bg-[#010B13] text-white'>
                        <div className="flex w-[520px]  gap-[50px] h-[74px] top-[2300px] left-[329px] border-[1px] bg-[#010B13] text-white">
                            <div className='w-[67px] mt-[10px] h-[29px] top-[2322px] left-[379px] font-inter font-[400px] text-[24px] leading-[29px] text-white'>Name</div>
                            <input className='mt-[10px] ml-[60px] w-[248px] h-[40px] top-[2316px] left-[542px] rounded-[5px] bg-[#808080] ' placeholder="   Enter the name"></input>
                        </div>
                        <div className="flex w-[520px]  gap-[50px] h-[74px] top-[2374px] left-[329px] border-[1px] bg-[#010B13] text-white">
                            <div className='w-[179px] mt-[10px] h-[29px] top-[2393px] left-[347px] font-inter font-[400px] text-[24px] leading-[29px] text-white'>Aadhar Number</div>
                            <input className='mt-[10px] w-[248px] h-[40px] top-[2395px] left-[547px] rounded-[5px] bg-[#808080] ' placeholder="   Enter the Number"></input>
                        </div>
                        <button onClick={()=>navigate('/verify')} className="ml-[30px] mt-[40px] w-[199px] h-[82px] top-[2520px] text-black rounded-[100px] left-[357px] bg-[#50C878] rounded-[100px] ">Verify</button>

                </div>
    </div>

    </div>
    </div>
  )
}

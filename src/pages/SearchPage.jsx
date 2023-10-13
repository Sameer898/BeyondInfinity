import React from 'react'
import { Navbar } from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {toast} from 'react-hot-toast'
import { useSelector } from 'react-redux'
export const SearchPage = () => {
    const [firstSearch,setFirstSearch]=useState(true);
    const [secondSearch,setSecondSearch]=useState(false);
    const [confirmation,setConfirmation]=useState(false);
    const navigate=useNavigate();
    const {type}=useSelector((state)=>state.auth);
    const handleFirstSearch=()=>{
        setFirstSearch(true);
        setSecondSearch(false);
        setConfirmation(false);
    }
    const handleSecondSearch=()=>{
        setSecondSearch(true);
        setFirstSearch(false);
        setConfirmation(false);
    }
    const handleConfirmation=()=>{
        setConfirmation(true);
        setFirstSearch(false);
        setSecondSearch(false);
    }
  return (
    <div>
    <Navbar/>
    {
        firstSearch && 
        <div className='flex'>
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

    <div className="w-[1164px] h-[860px] top-[1108px] left-[272px] bg-[#010B13] ">
    <div className="ml-[30px] w-[165px] h-[58px] top-[1127px] left-[377px] font-inter font-[700px] text-[48px] leading-[58px] text-white">Search</div>
    <div className="ml-[30px] w-[404px] mt-[20px] top-[169px] left-[352px] border-[1px] text-white "></div>

    <div className="ml-[30px] mt-[50px] w-[525px] h-[552px] top-[1257px] left-[370px] rounded-[8px] border-[1px] bg-[#010B13] text-white">
           <div className="flex w-[520px] h-[74px] top-[1253px] left-[370px] border-[1px] bg-[#010B13] text-white">
                <div className="ml-[30px]  mt-[20px] w-[86px] h-[29px] top-[1273px] left-[424px] font-inter font-[400px] text-[24px] leading-[29px] text-white">Service</div>
                <input type=" text" className='ml-[30px] mt-[20px] w-[248px] h-[40px] top-[1270px] left-[581px] rounded-[5px] bg-[#808080]' placeholder="    Enter the service"></input>
           </div>
           <div className="flex w-[520px] h-[74px] top-[1327px] left-[370px] border-[1px] bg-[#010B13] text-white">
                <div className="ml-[30px]  mt-[20px] w-[42px] h-[29px] top-[1342px] left-[436px] font-inter font-[400px] text-[24px] leading-[29px] text-white">City</div>
                <input type=" text" className='ml-[30px] mt-[20px] w-[248px] h-[40px] top-[1270px] left-[581px] rounded-[5px] bg-[#808080]' placeholder="    Enter the city"></input>
           </div>
           <div className="flex w-[520px] h-[74px] top-[1401px] left-[370px] border-[1px] bg-[#010B13] text-white">
                <div className="ml-[30px]  mt-[20px] w-[61px] h-[29px] top-[1461px] left-[427px] font-inter font-[400px] text-[24px] leading-[29px] text-white">State</div>
                <input type=" text" className='ml-[30px] mt-[20px] w-[248px] h-[40px] top-[1416px] left-[581px] rounded-[5px] bg-[#808080]' placeholder="    Enter the state"></input>
           </div>

           <div className="flex w-[520px] h-[74px] top-[1473px] left-[374px] border-[1px] bg-[#010B13] text-white">
                <div className="ml-[30px]  mt-[20px] w-[94px] h-[29px] top-[1494px] left-[416px] font-inter font-[400px] text-[24px] leading-[29px] text-white">Address</div>
                <input type=" text" className='ml-[30px] mt-[20px] w-[248px] h-[40px] top-[1499px] left-[581px] rounded-[5px] bg-[#808080]' placeholder="    Enter the address"></input>
           </div>

           <div className="flex w-[520px] h-[74px] top-[1574px] left-[374px] border-[1px] bg-[#010B13] text-white">
                <div className="ml-[30px]  mt-[20px] w-[103px] h-[29px] top-[1562px] left-[416px] font-inter font-[400px] text-[24px] leading-[29px] text-white">Pin Code</div>
                <input type=" text" className='ml-[30px] mt-[20px] w-[248px] h-[40px] top-[1562px] left-[581px] rounded-[5px] bg-[#808080]' placeholder="    Enter the state"></input>
           </div>
           <button onClick={()=>handleSecondSearch()} className="ml-[30px] mt-[40px] w-[199px] h-[82px] top-[1670px] text-black left-[403px] bg-[#50C878] rounded-[100px] ">Search</button>
    </div>

    </div>

    </div>
    

    }
    {
        secondSearch && 
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
    <div className="ml-[30px] w-[165px] h-[58px] top-[1127px] left-[377px] font-inter font-[700px] text-[48px] leading-[58px] text-white">Caregivers</div>
    <div className="ml-[30px] w-[404px] mt-[20px] top-[169px] left-[352px] border-[1px] text-white "></div>

    <div className='mt-[20px]'>
            <div className="flex gap-[60px] ml-[30px] w-[1002px] h-[112px] top-[1261px] left-[270px] border-[1px] bg-[#010B13] text-white">
            <div className=''>
                    <div className="ml-[10px] w-[67px] h-[29px] top-[1281px] left-[311px] font-inter font-[400px] text-[24px] leading-[29px] text-white">Name</div>
                    <div className='ml-[10px] w-[164px] h-[29px] top-[317px] left-[311px] font-inter font-[400px] text-[24px] leading-[29px] text-[#808080]'>Harshal Tonge</div>

            </div>
            <div>
                    <div className='ml-[10px] w-[94px] h-[29px] top-[1281px] left-[543px] font-inter font-[400px] text-[24px] leading-[29px] text-white'>Address</div>
                    <div className='ml-[10px] w-[355px] h-[29px] top-[1317px] left-[543px] font-inter font-[400px] text-[24px] leading-[29px] text-[#808080]' >Hanuman nagar,Hingna,Nagpur</div>
            </div>
            <div className='flex gap-[30px] mt-[10px] '>
            <button onClick={()=>handleConfirmation()} className="w-[116px] h-[50px] top-[1296px] text-black left-[946px] bg-[#50C878]">Request</button>
            <button onClick={()=>navigate('/search')} className="w-[116px] h-[50px] top-[1296px] text-black left-[1108px] bg-[#ACE1AF]">Back</button>
            </div>
                    
            </div>  

            <div className="flex gap-[60px] ml-[30px] w-[1002px] h-[112px] top-[1373px] left-[270px] border-[1px] bg-[#010B13] text-white">
            <div className=''>
                    <div className="ml-[10px] w-[67px] h-[29px] top-[1389px] left-[325px] font-inter font-[400px] text-[24px] leading-[29px] text-white">Name</div>
                    <div className='ml-[10px] w-[164px] h-[29px] top-[1424px] left-[310px] font-inter font-[400px] text-[24px] leading-[29px] text-[#808080]'>Himanshu vade</div>

            </div>
            <div>
                    <div className='ml-[10px] w-[94px] h-[29px] top-[1389px] left-[563px] font-inter font-[400px] text-[24px] leading-[29px] text-white'>Address</div>
                    <div className='ml-[10px] w-[355px] h-[29px] top-[1424px] left-[544px] font-inter font-[400px] text-[24px] leading-[29px] text-[#808080]' >Hanuman nagar,Hingna,Nagpur</div>
            </div>
            <div className='flex gap-[30px] mt-[10px] '>
            <button onClick={()=>handleConfirmation()} className="w-[116px] h-[50px] top-[1403px] text-black left-[946px] bg-[#50C878]">Request</button>
            <button onClick={()=>navigate('/search')} className="w-[116px] h-[50px] top-[1403px] text-black left-[1108px] bg-[#ACE1AF]">Back</button>
            </div>
            
                    
            </div>  
            <button onClick={()=>navigate('/search')} className="ml-[30px] mt-[50px] w-[116px] h-[50px] top-[1548px] text-black left-[270px] bg-[#ACE1AF]">Back</button>
            
    </div>
    

    </div>

    </div>

       
    }
    {
        confirmation && 
        <div className='flex bg-[#010B13]  '>
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
        <div className="w-[639px] mt-[50px] h-[348px] mx-auto border-[1px] bg-[#010B13] text-white">
                <div className='text-[40px] rounded-3xl '>Are you sure you want to send Request</div>
                <div className="flex">
                <button onClick={()=>{
                    handleConfirmation();
                    toast.success("Successfully request sent.");
                    navigate("/search");
                }} className="ml-[30px] mt-[50px] w-[116px] h-[50px] top-[1548px] text-black left-[270px] bg-[#ACE1AF]">Request</button>
                <button onClick={()=>{
                    handleFirstSearch();
                    navigate('/search');
                }} className="ml-[30px] mt-[50px] w-[116px] h-[50px] top-[1548px] text-black left-[270px] bg-[#ACE1AF]">Cancel</button>
                </div>
                
        </div>
        </div>
    }
    
    </div>
    
  )
}

import React from 'react'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export const SearchPage = () => {
    const [firstSearch,setFirstSearch]=useState(true);
    const [secondSearch,setSecondSearch]=useState(false);
    const [confirmation,setConfirmation]=useState(false);

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

    <div className=''>
            <div className="flex ml-[30px] w-[1002px] h-[112px] top-[1261px] left-[270px] border-[1px] bg-[#010B13] text-white">
            <div className=''>
                    <div className="w-[67px] h-[29px] top-[1281px] left-[311px] font-inter font-[400px] text-[24px] leading-[29px] text-white">Name</div>
                    <div className='w-[164px] h-[29px] top-[317px] left-[311px] font-inter font-[400px] text-[24px] leading-[29px] text-[#808080]'>Harshal Tonge</div>

            </div>
            <div>
                    <div className='w-[94px] '></div>
            </div>
                    
            </div>  
    </div>

    </div>

    </div>

       
    }
    
    </div>
  )
}

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar } from './Navbar'
import { useSelector } from 'react-redux'
export const Caregiver= () => {
    const linkData=[{
        name:"Name",
        surname:"Sameer Turke",
    },
       {
        name:"Email",
        surname:"beyondInfinity@gmail.com"
       }
       ,{
        name:"Aadhar Card",
        surname:""
       }

]
const {type}=useSelector((state)=>state.auth);
const navigate=useNavigate();
  return (
    <div>
    <Navbar/>
      <div className="flex">
    <div className="w-[272px] h-[862px] bg-[#010B13] text-center py-[76px] px-[-10px] border-[1px] text-white ">
        <div className=' "'><Link to={`${type?"/myprofile":"/caregivier"}`}>Profile</Link></div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] ">--------------------</div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] "></div>
        <div className='"'><Link to="/Services">Serives</Link></div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] ">--------------------</div>
        <div className=' '><Link to="/careAuthentication">Authentication</Link></div>
        <div className="w-[194px] text-center mt-[200px] ml-[45px] text-center ">--------------------</div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] "></div>
        <div className='"'><Link to="/todo">To do</Link></div>
        <div className="w-[194px] text-center mt-[200px] ml-[45px] text-center ">--------------------</div>
        <div className="w-[194px] text-center top-[94px] ml-[45px] text-white"></div>
        <div className='"'><Link to="/requests">Requests</Link></div>
        
       <Link to="/setting" className="">Setting</Link>
    </div>

    <div className="w-[1164px] h-[860px] top-[78px] left-[282px] bg-[#010B13]  gap-[10px] flex flex-col">
       <div className="flex ">
       <div className=" flex ml-[30px] w-[350px] h-[48px] top-[99px] text-white left-[352px] font-inter font-[700px] text-[40px] leading-[48px] ">Caregiver Profile</div>
        
       </div>
        <div className="flex mt-[30px] ">
        <img src="img/contact.jpeg" className="ml-[30px] w-[80px] h-[65px] top-[207px] left-[356px] bg-[#D9D9D9] rounded-full"></img>
        <div className="flex flex-col">
        <div className="ml-[30px] w-[157px] h-[29px] top-[214px] left-[476px] font-inter font-[400px] text-[24px] leading-[29px] text-white">Sameer Turke </div>
        <div className="ml-[30px] w-[300px] h-[29px] top-[243px] left-[476px] font-inter font-[400px] text-[24px] leading-[29px] text-[#808080]">beyondInfinity@gmail.com</div>
        </div>
        </div>
        <div className="ml-[30px] gap-[20px] w-[794px] h-[399px] top-[309px] left-[359px] border-[1px] bg-[#010B13] text-white">

{
    linkData.map((data,index)=>{
        return(
            <div className="w-[793px] h-[88px] top-[310px] left-[360px] flex justify-between">
                
                <div className=" ">
                    <div className="ml-[30px] w-[100px] h-[29px] top-[321px] left-[403px] font-inter font-[400px] text-[24px] leading-[29px] text-white">{data.name}</div>

                    <div className='ml-[30px] w-[152px] h-[29px] top-[354px] left-[400px] font-inter font-[400px] text-[24px] leading-[29px] text-[#808080]'>{data.surname}</div>
                </div>
                <div className="flex gap-[10px] mt-[10px]">
                    <button onClick={()=>navigate('/setting')} className="w-[106px] h-[36px] top-[332px] text-black left-[840px] bg-[#50C878]">Edit</button>
                    <br></br>
                    <button onClick={()=>navigate('/setting')} className="w-[106px] h-[36px] top-[332px] text-black left-[969px] bg-[#50C878]">Cancel</button>
                </div>
            </div>  
        );
    })
}
</div>
        
    </div>

    </div>

    </div>
  
  )
}

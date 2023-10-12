import React from 'react'

export const Navbar = () => {
  return (
    <div className="text-[white] w-[100%] h-[100px] mt-[-20px] bg-[#010B13] font-[1.5rem] flex flex-between">
    
    <div className="flex mt-[10px] ">
        <img className="w-[80px] h-[80px] ml-[10px] mt-[6px] " src="https://media.istockphoto.com/id/1191918617/vector/blue-infinity-vector-logo-template-illustration-design-vector-eps-10.jpg?s=612x612&w=0&k=20&c=MpIcp6ll_Av7TMNlubDuIs47774kLjlxRoY4toypNBc="></img>
       
    </div>

    <div className="flex mt-[50px] gap-[50px] ml-[200px] ">
        <div>Home</div>
        <div>About</div>
        <div>Profile</div>
        <div className="ml-[600px] gap-[10px] ">
        <button className="mr-[10px] ">Login</button>
        
        <button>Sign Up</button>

        </div>
      
    </div>
    
    </div>
  )
}

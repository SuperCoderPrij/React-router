import React from 'react'
import { NavLink, useNavigate } from 'react-router'

const Navbar = () => {
    let navigate = useNavigate();
  return (
    <div className='w-full flex justify-between items-center p-2 text-[#0A1828] bg-[#178582] h-20 rounded-lg'>
        <div className='h-15 w-15'>
            <img className='rounded-4xl' src="https://cdn.pixabay.com/photo/2023/01/31/01/50/crown-7756927_1280.png" alt="" />
        </div>
        <nav className='flex gap-7 text-3xl font-semibold font-mono'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        </nav>
        <button onClick={()=>{
            navigate("/contact/form");
        }} className='bg-[#0A1828] text-[#178582] font-semibold font-mono text-xl py-3 px-6 rounded-md cursor-pointer'>Login</button>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {AiFillDashboard,AiOutlineLogout} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {BsFillPeopleFill} from "react-icons/bs"
import Home from "./Home"
function Dashboard() {
  return (
    <>
    <div className='md:flex md:flex-row flex flex-col '>
    <div>
    <div className='bg-[#333] md:w-[340px] md:h-full md:items-left md:justify-start md:flex md:flex-col flex flex-row justify-around w-full h-20  md:gap-20'>
      <h1 className='md:text-4xl text-2xl text-white font-sans p-2'>Menu</h1>
       <Link to="/dashboard"><li className='flex flex-row md:text-2xl text-xl p-2 md:border-b-2 md:border-white text-white font-sans hover:text-blue-600'><AiFillDashboard className='mr-2'/> Dashboard</li></Link>
       <Link to="/employee"><li className='flex flex-row md:text-2xl text-xl p-2 md:border-b-2 md:border-white text-white font-sans hover:text-blue-600'><BsFillPeopleFill className='mr-2'/> Manage Employee</li></Link>
       <Link to="/profile"><li className='flex flex-row md:text-2xl text-xl p-2 md:border-b-2 md:border-white text-white font-sans hover:text-blue-600'><CgProfile className='mr-2'/>Profile</li></Link> 
       <Link to="/"><li className='flex flex-row md:text-2xl text-xl p-2 md:border-b-2 md:border-white text-white font-sans hover:text-blue-600'><AiOutlineLogout className='mr-2'/> Logout</li></Link>
    </div> 
    </div>
    <div className='w-full'>
    <div className='shadow-xl shadow-gray-400 '>
        <h1 className='text-center p-8 text-4xl font-bold font-sans'>Employee Management System</h1>
    </div>
      <div>
        <Home/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard
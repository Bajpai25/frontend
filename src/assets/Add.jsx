import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import {AiFillDashboard,AiOutlineLogout} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {BsFillPeopleFill} from "react-icons/bs"

function Add() {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [address,setaddress]=useState('');
  const [salary,setsalary]=useState('');
  async function handledata(e){
    e.preventDefault();
    try{
      const response=await fetch('https://backend-ufrt.onrender.com/add',{
        headers:{"Content-Type":"application/json"},
        method:"POST",
        body:JSON.stringify({
          name,email,password,address,salary
        })
      })
      const data=await response.json();
      console.log(data);
      if(response.status===200){
        alert("Employee Added successfully!");
        window.location.href="/employee";
      }
      else{
        alert('Error',response.status.text);
      }
    }
    catch(err){
      console.error("Error:", err);
    }
  }
  return (
    <>
    <div className='md:flex md:flex-row flex flex-col'>
    <div>
    <div className='bg-[#333] md:w-[340px] md:h-screen md:items-left md:justify-start md:flex md:flex-col flex flex-row justify-around w-full h-20  md:gap-20'>
      <h1 className='md:text-4xl text-2xl text-white font-sans p-2'>Menu</h1>
       <Link to="/employee"><li className='flex flex-row md:text-2xl text-xl p-2 md:border-b-2 md:border-white text-white font-sans hover:text-blue-600'><BsFillPeopleFill className='mr-2'/> Manage Employee</li></Link>
       <Link to="/"><li className='flex flex-row md:text-2xl text-xl p-2 md:border-b-2 md:border-white text-white font-sans hover:text-blue-600'><AiOutlineLogout className='mr-2'/> Logout</li></Link>
    </div> 
    </div>
    <div className='w-full'>
    <div className='shadow-xl shadow-gray-400 '>
        <h1 className='text-center md:p-8 md:text-4xl text-2xl p-3 font-bold font-sans'>Employee Management System</h1>
    </div>
      <div>
        <h1 className='text-3xl font-sans font-semibold p-6 text-center mb-4'>Add Employee</h1>
        <form onSubmit={handledata} className='flex flex-col gap-2 justify-start items-center'>
        <label className='text-left text-xl font-semibold'>Name</label>
          <input required value={name}  onChange={(e)=>{setname(e.target.value)}} type="text" placeholder='Enter something' className='border-gray-400 border-solid border-2  text-lg p-3 w-auto md:w-[400px]'></input>
          <label className='text-left text-xl font-semibold'>Email</label>
          <input required value={email} onChange={(e)=>{setemail(e.target.value)}}  type="email" placeholder='Enter something' className='border-gray-400 border-solid border-2  text-lg p-3 w-auto md:w-[400px]'></input>
          <label className='text-left text-xl font-semibold'>Password</label>
          <input required value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder='Enter something' className='border-gray-400 border-solid border-2  text-lg p-3 w-auto md:w-[400px]'></input>
          <label className='text-left text-xl font-semibold'>Address</label>
          <input required value={address}  onChange={(e)=>{setaddress(e.target.value)}} type="text" placeholder='Enter something' className='border-gray-400 border-solid border-2  text-lg p-3 w-auto md:w-[400px]'></input>
          <label className='text-left text-xl font-semibold'>Salary</label>
          <input type="number" required value={salary}  onChange={(e)=>{setsalary(e.target.value)}}  placeholder='Enter Amount' className='border-gray-400 border-solid border-2  text-lg p-3 w-auto md:w-[400px]'></input>
        <button type='submit' className='bg-blue-600 text-xl text-white rounded-lg p-2 w-28 h-auto'>Create</button>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Add
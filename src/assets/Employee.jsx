import React,{useEffect,useState} from 'react'
import { Link, } from 'react-router-dom'
import {AiFillDashboard,AiOutlineLogout} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {BsFillPeopleFill} from "react-icons/bs"
function Employee() {
  const [data,setdata]=useState([]);
  async function get_data(){
    const response=await fetch('https://backend-ufrt.onrender.com/getdata');
    const data1=await response.json();
    console.log(data);
    setdata(data1.data);
  }
  useEffect(()=>{
    get_data()
  },[])
  async function handle_click(id){
    const response = await fetch('https://backend-ufrt.onrender.com/delete/'+id,{
      method:'DELETE',
    })
    const data=response.json();
    if(response.status===200){
      alert("Employee Deleted Successfully");
      get_data();
      console.log(data);
    }
    else{
      console.log("Error occurred!")
    }
  }
  return (
      <>
        <div className='md:flex md:flex-row flex flex-col '>
    <div>
    <div className='bg-[#333] md:w-[340px] w-auto md:h-full md:items-left md:justify-start md:flex md:flex-col flex flex-row justify-around  h-20  md:gap-20'>
      <h1 className='md:text-4xl text-2xl text-white font-sans p-2'>Menu</h1>
       <Link to="/employee"><li className='flex flex-row md:text-2xl text-xl p-2 md:border-b-2 md:border-white text-white font-sans hover:text-blue-600'><BsFillPeopleFill classNameName='mr-2'/> Manage Employee</li></Link>
       <Link to="/"><li className='flex flex-row md:text-2xl text-xl p-2 md:border-b-2 md:border-white text-white font-sans hover:text-blue-600'><AiOutlineLogout classNameName='mr-2'/> Logout</li></Link>
    </div> 
    </div>
    <div className='w-full'>
    <div className='shadow-xl shadow-gray-400 '>
        <h1 className='text-center p-8 md:text-4xl text-2xl font-bold font-sans'>Employee Dashboard</h1>
    </div>
    <div className='px-5 py-3'>
      <div className='flex flex-row justify-around'>
        <h3 className='text-3xl font-sans font-bold p-4'>Employees List</h3>
      </div>
      <Link to="/add"><button className='bg-green-700 text-white text-xl w-auto p-3 h-12 rounded-lg mb-6'>Add employee</button></Link>
      <table className=" border-collapse  border border-gray-300 w-full ">
  <thead>
    <tr className="bg-gray-200 md:flex md:flex-row md:justify-between flex flex-col ">
      <th className="border border-gray-300 py-2 px-4 ">Name</th>
      <th className="border border-gray-300 py-2 px-4">Email</th>
      <th className="border border-gray-300 py-2 px-4 ">Address</th>
      <th className="border border-gray-300 py-2 px-4 ">Salary</th>
      <th className="border border-gray-300 py-2 px-4 ">Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => {
      return (
        <tr key={index} className="bg-white md:flex md:flex-row  md:justify-between flex flex-col">
          <td className="border border-gray-300 md:py-2 md:px-4 py-1 px-1 ">{item.name}</td>
          <td className="border border-gray-300 md:py-2 md:px-4 py-1 px-1 ">{item.email}</td>
          <td className="border border-gray-300 md:py-2 md:px-4 py-1 px-1 ">{item.address}</td>
          <td className="border border-gray-300 md:py-2 md:px-4 py-1 px-1 ">$ {item.salary}</td>
          <div className='md:flex md:flex-row md:justify-around flex flex-col gap-2 mt-2 '>
          <Link to={`/employee_edit/` + item._id}><button className=" bg-blue-500 text-white text-lg w-20 h-auto m-2">Edit</button></Link>
  <button  onClick={e=>handle_click(item._id)} className="bg-red-500 text-white w-20 h-auto text-lg m-2">Delete</button>
</div>
        </tr>
      )
    })}
  </tbody>
</table>
    
    </div>
    </div>
    </div>
      </>
  )
}

export default Employee
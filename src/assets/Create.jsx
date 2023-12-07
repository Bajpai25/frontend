import React,{useState,useRef,useEffect} from 'react'
import { Link } from 'react-router-dom'
function Create() {
  const videoRef=useRef(null);

 useEffect(()=>{
  if(videoRef.current){
    videoRef.current.play();
  }
 },[])
  const [first,setfirst]=useState('');
  const [last,setlast]=useState('');
  const [email,setnewemail]=useState('');
  const [password,setnewpassword]=useState('');
  async function registerdata(e){
    e.preventDefault();
    try{
    const response=await fetch('https://backend-ufrt.onrender.com/register',{
      headers:{"Content-type":"application/json"},
      method:"POST",
      body:JSON.stringify({
        first,last,email,password
      })
    })
    const data=await response.json();
    console.log(data);
    if(response.status){
      alert('User created successfully!');
    }
  }
  catch(err){
    console.log("error in creating user",err);
  }
}
  return (
       <div className='bg-gray-200 w-full md:h-full h-[1200px] relative'>
    <video ref={videoRef} src="https://www.shutterstock.com/shutterstock/videos/1076130974/preview/stock-footage-diverse-company-employees-having-online-business-conference-video-call-on-tv-screen-monitor-in.webm" 
    className='filter blur-sm bg-cover w-full h-full ' autoplay loop muted ></video>
    <div className='flex flex-col  items-center  pt-8  p-4 absolute inset-0'>
    <div className='bg-white m-1 p-2 rounded w-auto h-auto shadow-xl shadow-gray-800'>
        <h2 className='text-4xl p-4 font-bold text-gray-600 text-center'>Register</h2>
        <form onSubmit={registerdata}  className=' flex flex-col gap-2'>
            <div className='mb-8 mt-8 flex flex-col  flex-wrap md:flex md:flex-row gap-8'>
            <label><strong className='text-2xl text-gray-600 p-4'>First Name</strong></label>
            <input required value={first} onChange={(e)=>{setfirst(e.target.value)}}   type='text'  
             className='border-gray-200 border-solid border-2  text-lg p-3 w-auto md:w-[400px]'/>
            </div>
            <div className='mb-8 mt-8 flex flex-col  flex-wrap md:flex md:flex-row gap-8'>
            <label><strong className='text-2xl text-gray-600 p-4'>Last Name</strong></label>
            <input required value={last} onChange={(e)=>{setlast(e.target.value)}} type='text'  
             className='border-gray-200 border-solid border-2  text-lg p-3 w-auto md:w-[400px]'/>
            </div>
            <div className='mb-8 mt-8 flex flex-col  flex-wrap md:flex md:flex-row gap-8'>
            <label htmlFor='email'><strong className='text-2xl text-gray-600 p-4'>Email</strong></label>
            <input required value={email} onChange={(e)=>{setnewemail(e.target.value)}} type='email' placeholder='Enter-Email' 
            name='email' className='border-gray-200 border-solid border-2  text-lg p-3 w-auto md:w-[400px]'/>
            </div>
            <div className='mb-8 mt-8 flex flex-col  flex-wrap md:flex md:flex-row gap-1 '>
                <label htmlFor='password'><strong className='text-2xl text-gray-600 p-3'>Password</strong></label>
                <input type="password" required value={password} onChange={(e)=>{setnewpassword(e.target.value)}}  placeholder='Enter password' 
                name="password" className=' border-gray-200 border-solid border-2 mt-4 text-lg p-4 w-auto md:w-[400px]'/>
            </div>
            <button type="submit"  className='bg-green-600 text-white  font-semibold text-xl w-3/4  h-14 ml-2
             mr-2 mt-2 mb-2'>Register</button>
            <p className='text-gray-600 p-4 text-xl font-mono'>You agree to our terms and policies</p>
            <Link to="/"><button className='bg-blue-600 w-40 h-14 text-xl m-4 mt-8 mb-8 ml-4 rouunded-full text-white font-semibold'>Return </button></Link>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Create
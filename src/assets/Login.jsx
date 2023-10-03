
import React,{useState} from 'react'
import {Link} from "react-router-dom"
function Login() {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false); 
   async function handlesubmit(e){
    e.preventDefault();
    try{
    const response =await fetch('https://backend-ufrt.onrender.com/login' ,{
        headers:{"Content-type":"application/json"},
        method:'POST',
        body:JSON.stringify({
            email,password
        })
    }
    )
    if (response.status === 201) {
        alert('Login successful');
        setLoginSuccessful(true);
    }
    else{
        alert("Invalid Login credentials.. Please register");
    }
    const data= await response.json();
    console.log(data);
}
catch(err){
    console.log(err);
}
   }
  return (
    <div className='bg-gray-200 w-full md:h-full h-[1200px] relative'>
    <img src="https://th.bing.com/th/id/OIG.4cHvqo2j0QPFf8GXKQ9J?pid=ImgGn" className='relative bg-cover w-full h-full'></img>
    <div className='flex flex-col  items-center pt-4  p-4 absolute inset-0'>
    <div className='bg-white m-1 p-2 rounded w-auto h-auto shadow-xl shadow-gray-800'>
        <h2 className='text-4xl p-4 font-bold text-gray-600 text-center'>Login</h2>
        <form onSubmit={handlesubmit} action='#' className=' flex flex-col gap-2'>
            <div className='mb-8 mt-8 flex flex-col  flex-wrap md:flex md:flex-row gap-8'>
            <label htmlFor='email'><strong className='text-2xl text-gray-600 p-4'>Email</strong></label>
            <input value={email} onChange={(e)=>{setemail(e.target.value)}} type='email' placeholder='Enter-Email' 
            name='email' className='border-gray-200 border-solid border-2  text-lg p-3 w-auto md:w-[400px]'/>
            </div>
            <div className='mb-8 mt-8 flex flex-col  flex-wrap md:flex md:flex-row gap-1 '>
                <label htmlFor='password'><strong className='text-2xl text-gray-600 p-4'>Password</strong></label>
                <input type='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter password' 
                name="password" className=' border-gray-200 border-solid border-2 mt-4 text-lg p-3 w-auto md:w-[400px]'/>
            </div>
            <button type="submit"  className='bg-green-600 text-white  font-semibold text-xl w-3/4  h-14 ml-2 mr-2 mt-2 mb-2'>Log in</button>
            <p className='text-gray-600 p-4 text-xl font-mono'>You agree to our terms and policies</p>
            <Link to="/create"><button className='bg-blue-600 w-40 h-14 text-xl m-4 mt-8 mb-8 ml-4 rouunded-full text-white font-semibold'>Create account</button></Link>
            {loginSuccessful ? (
  <Link to="/employee">
    <button className='bg-blue-600 w-40 h-14 text-xl m-4 mt-8 mb-8 ml-4 rouunded-full text-white font-semibold'>
      Proceed
    </button>
  </Link>
) : null}
</form>
    </div>
    </div>
    </div>
  )
}

export default Login
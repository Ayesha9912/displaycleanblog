import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact(){

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [msg, setmsg] = useState("")
  const [array, setarray] = useState([]);

  const button = ()=>{
    const newArray = [...array, {name, email, msg}]
    setarray(newArray)
    localStorage.setItem("dataPost", JSON.stringify(newArray))
    setname("")
    setemail("")
    setmsg("")
  }
  return(
    <div>
      <Navbar/>
      <div className='w-full flex flex-col items-center mt-10 h-[75vh]'>
        <h1 className='text-3xl md:text-4xl font-bold'>Contact Us</h1>
        <div className='w-[100%] md:w-[70%] p-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5  w-full mt-10'>
            <input type="text" value={name} onChange={(e)=> setname(e.target.value)} placeholder='Enter your name' className='border border-sky-800 h-10 pl-5' />
            <input type="email" value={email} onChange={(e)=> setemail(e.target.value)} placeholder='Enter your Email' className='border border-sky-800 h-10 pl-5' />
          </div>
          <textarea name=""  value={msg} onChange={(e)=> setmsg(e.target.value)} placeholder='Enter your message here' className='border border-sky-800  p-5 mt-10 w-[100%] h-48'></textarea>
          <button onClick={button} className='bg-sky-800 w-[100%] rounded-md py-3 mt-5 text-white font-bold'>SUBMIT</button>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

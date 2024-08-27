import React from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';

export default function Navbar(){
  return(
    <>
    <div className='w-full h-[8vh] flex justify-center items-center bg-sky-800'>
        <div className='w-[90%] h-[100%] flex justify-between items-center'>
            <Link to='/'>
            <h1 className='font-bold text-white text-2xl'>Clean Blog</h1>
            </Link>
            <div className='hidden md:flex'>
                <ul className='flex cursor-pointer gap-x-10 text-white  font-bold'>
                    <Link to='/'>
                    <li>Home</li>
                    </Link>
                    <Link to='/about'>
                    <li>About</li>
                    </Link>
                    <Link to='/contact'>
                    <li>Contact</li>
                    </Link>
                </ul>
            </div>
            <div className='flex md:hidden justify-center items-center'>
            <CiMenuBurger color='white' size={25}/>  
            </div>
        </div>
    </div>

    </>
  )
}

import React from 'react';
import {data} from '../Data'
import { Link } from 'react-router-dom';

export default function Center(){
  console.log(data.date);
  return(
    <>
    <div className='w-[100%] h-auto flex items-center flex-col gap-y-20 mt-32 p-5'>
      {data.map((item, index)=>{
        return(
          <div key={index} className='p-7 bg-white shadow-lg  rounded-md border  w-[100%] lg:w-[70%]'>
          <Link to={`/post/${item.id}`}>
          <div>
            <h1 className='text-3xl md:text-4xl font-bold  cursor-pointer hover:text-sky-800'>{item.title}</h1>
            <p className='text-1xl md:text-2xl  cursor-pointer hover:text-sky-800 mt-5'>{item.description}</p>
          </div>
          </Link>
           </div>
          
        )
      })}
    </div>
    </>
  )
}

import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import {data} from '../Data'
import Navbar from './Navbar';
import Footer from './Footer';

export default function Post(){
  const {id} = useParams()
  console.log(id);
  const postData = useMemo(()=>{
  return  data.find((ele)=>{
      return ele.id === parseInt(id)
    })
  }, [id, data])
  if (!postData) {
    return <div>Post not found</div>;
  }
  console.log(postData, "PostData");
  let {img, title, description , content} = postData
  console.log(title);
  return(
    <>
    <Navbar/>
    <div className='w-[100%] p-5'>
          <div key={postData.id} className='w-[100%] flex flex-col items-center'>
          <h1 className='text-3xl md:text-5xl text-sky-800 mt-6 font-bold'>{title}</h1>
            <h3 className='text-2xl md:text-2xl mt-3 text-black'>{description}</h3>
            <div className='w-[100%] md:w-[70%] mt-10 h-[50vh]'>
              <img src={img} alt={title} className='w-[100%] h-[100%]'/>
            </div>
            <div className='w-[100%] md:w-[70%] flex flex-col'>
            
            <h2 className='font-bold mt-5 text-2xl'>Description:</h2>
            <p className='text-xl md:text-2xl'>{content}</p>
            </div>
          </div>

          
    </div>

    <Footer/>

    </>
  )
}

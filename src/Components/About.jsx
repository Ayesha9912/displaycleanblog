import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
export default function About(){
  return(
    <div>
      <Navbar/>
      <div className='w-full flex flex-col items-center h-[80vh]'>
      <h1 className='text-3xl md:text-6xl font-bold text-center mt-10'>About Us</h1>
      <p className='w-[100%] md:w-[60%] mt-5 text-xl text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, quos ratione aliquam eveniet optio veniam repudiandae distinctio enim ut adipisci! Aspernatur tempora facere a expedita illum est corrupti saepe recusandae, quo asperiores? Placeat fuga, adipisci illum recusandae quis facere exercitationem laudantium. Assumenda eligendi libero iure quidem magni qui corrupti recusandae laudantium illum consectetur quasi aliquam ea accusantium at excepturi velit, deleniti numquam dolorem est dolorum. Suscipit harum velit fugit praesentium provident. Nostrum eos fugiat voluptatibus quae beatae reiciendis, fuga quo vel odio. Dolor odit exercitationem mollitia quae accusamus, sed perspiciatis eaque harum amet iure quia magni ratione aspernatur ipsa ducimus.</p>
      </div>
      <Footer/>
    </div>
  )
}

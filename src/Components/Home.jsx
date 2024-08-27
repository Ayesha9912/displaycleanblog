import React from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Center from './Center'
import Footer from './Footer'

export default function Home(){
  return(
    <div>
        <Navbar/>
        <Herosection/>
        <Center/>
        <Footer/>
    </div>
  )
}

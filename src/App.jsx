import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Post from './Components/Post'
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/post/:id" element={<Post/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
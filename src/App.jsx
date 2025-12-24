import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact' 
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'


const App = () => {
  // const [count , setcount] = useState(0)
  // const changecount = () => {
  //       setcount (count + 1)
  // }
  return (
    <>
    {/* <p>{count}</p>
    <button onClick={changecount} className='bg-red-400 '>Add count</button> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
 
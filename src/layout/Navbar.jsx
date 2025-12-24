import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [open , setopen] = useState (false)
  return (
    <>
      <div className='flex justify-between bg-linear-to-t from-sky-500 to-indigo-500 p-5'>

      <div className='text-2xl font-extrabold'>logo</div>
      <div>

        <ul className='md:flex hidden gap-10 font-semibold'>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>

        </ul>

      </div>

      <div className='font-extrabold md:hidden block' onClick={() => setopen(!open)}>Toggle</div>

      </div>

      <div className={`md:hidden ${open ? 'block' : 'hidden'}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar

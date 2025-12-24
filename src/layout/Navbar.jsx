import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between bg-linear-to-t from-sky-500 to-indigo-500 p-5'>

      <div className='text-2xl font-extrabold'>logo</div>
      <div>

        <ul className='flex gap-10 font-semibold'>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>

        </ul>

      </div>

      </div>
    </>
  )
}

export default Navbar

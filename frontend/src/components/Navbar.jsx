import React from 'react'
import { Link } from 'react-router-dom'
import CustomImage from './CustomImage'

const Navbar = () => {
  return (
    <div className='flex flex-row px-[10%] py-8 w-full justify-between items-center  '>
      <div className='flex'>
        <Link to="/"><span className='text-2xl text-indigo italic cursor-pointer font-bold font-arial'>BookStore</span></Link>
      </div>
      <div className='flex gap-x-6 pl-28'>
        <Link to="/" className='text-sm hover:text-red-500'>Home</Link>
        <Link to="/books" className='text-sm hover:text-red-500'>Books</Link>
        <Link to="/contact" className='text-sm hover:text-red-500'>Contact </Link>
      </div>
      <div className='flex flex-row gap-6'>
        <div className="flex flex-row items-center border border-gray-300 rounded focus-within:border-blue-500">
          <input
            type="text"
            placeholder="Search for books"
            className="px-3 border-none focus:outline-none"
          />
          <div className="w-5 h-5 mx-2">
            <CustomImage name="searchIcon" />
          </div>
        </div>

        <div className='w-5 h-5 cursor-pointer'>
          <Link to="/profile"><CustomImage name='userIcon' /></Link>
        </div>
        <div className='w-5 h-5 cursor-pointer'>
          <Link to="/cart"><CustomImage name='cartIcon' /> </Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar




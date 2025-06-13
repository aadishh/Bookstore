import React from 'react'
import { Link } from 'react-router-dom'
import CustomImage from './CustomImage'

const Footer = () => {


    return (
        <div className='flex flex-col bg-shark text-white '>
            <div className='flex flex-row pl-6 pr-4 py-8  my-4 w-full justify-between items-center  '>
                <div className='flex'>
                    <Link to="/"><span className='text-2xl text-white italic cursor-pointer font-semibold'>BookStore</span></Link>
                </div>
                <div className='flex gap-x-6 pl-28'>
                    <Link to="/" className='text-sm '>Home</Link>
                    <Link to="/books" className='text-sm '>Books</Link>
                    <Link to="/contact" className='text-sm '>Contact </Link>
                </div>
                <div className='flex flex-row items-center gap-10 px-5'>
                <CustomImage  name='facebookIcon'/>
                <CustomImage name='instaIcon'/>
                <CustomImage  name='tweetIcon'/>
                <CustomImage name='mediumIcon'/>
                </div>
            </div>
            <div className='justify-center pb-6 text-sm'>Copyright © 2025 Book Store | Powered by Book Store</div>
        </div>
    )
}

export default Footer




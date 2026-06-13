import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className=' w-full px-[20px] flex flex-col pt-8 gap-5 pb-10 xl:w-full xl:px-30'>
        <h1 className='font-bold'>VirtualVibe</h1>

        <div className='flex flex-col gap-5 md:flex-row md:justify-between '>
          <p className='text-[14px]' >Satış gətirən veb saytlar — Next.js, SEO, conversion.</p>


          <div className='flex gap-2 md:mt-[-10px]'>
              <Link to="/Xidmetler">Xidmətlər</Link>
              <Link to="/Qiymetler">Qiymətlər</Link>
              <Link to="/Portfolio">Portfolio</Link>
              <Link to="/Elaqe">Əlaqə</Link>
          </div>
        </div>

        <div className='text-[13px]'>© 2026  VirtualVibe. All rights reserved.</div>
    </div>
    </>
  )
}

export default Footer
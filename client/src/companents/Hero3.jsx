import React from 'react'
import { Link } from "react-router-dom";

const Hero3 = () => {
  return (
    <div className='flex flex-col gap-4 items-center my-35'>
        <h1 className='text-4xl font-semibold md:text-5xl'>Səhifə tapılmadı</h1>
        <p className='text-gray-400'>Link səhv ola bilər və ya səhifə silinib.</p>
      <div className='flex gap-3'>
        <Link to="" className='bg-black text-white px-4 py-2 rounded-xl'>Ana səhifə</Link>
        <Link to="" className='border border-gray-400 px-4 py-2 rounded-xl'>Əlaqə</Link>
      </div>
    </div>
  )
}

export default Hero3
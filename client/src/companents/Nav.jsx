import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from "react-router-dom"

const FirstPage = () => {
  const [open ,setOpen] = useState(true)
  return (
    <>
    <div className="px-[10px] z-30 flex justify-end p-4 border-b-[0.5px] border-b-gray-300 fixed top-0 right-0 left-0 backdrop-blur ">

      {  ( <div className={`w-full  justify-center ${open ? "flex" : "hidden"} md:flex p-0`} >
        <div className='flex flex-col md:flex-row  w-full gap-5 md:justify-between md:gap-10 md:pt-2 lg:w-full md:w-full xl:mx-30' >
          
          <div className='flex justify-between  '>
            <svg
            width="100"
            height="50"
            viewBox="0 0 150 60"
            xmlns="http://www.w3.org/2000/svg"
            >
            <text
              x="50%"
              y="20"
              textAnchor="middle"
              className="logo-text"
            >
          <tspan x="50%" dy="0">Virtual</tspan>
          <tspan x="50%" dy="40">Vibe.az</tspan>
          </text>

          <style>{`
          .logo-text {
            fill: #06b6d4;
            font-size: 35px;
            font-weight: 700;
            font-family: Arial, sans-serif;
            animation: pulse 2s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% {
              filter: drop-shadow(0 0 2px #06b6d4);
            }
            50% {
              filter: drop-shadow(0 0 8px #06b6d4);
            }
          }
        `}</style>
        </svg>
        
            <svg onClick={() => setOpen(!open) } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 md:hidden w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>

          <ul className='flex  flex-col md:flex-row gap-5 md:gap-1 lg:gap-4 text-center w-full md:justify-end lg:justify-end items-center'>
            <Link to="/" className='bg-transparent focus:bg-mist-300  duration-300 rounded-xl px-2 py-1'>Ana səhifə</Link>
            <Link to="/Xidmetler" className='bg-transparent focus:bg-mist-300 duration-300  rounded-xl px-2 py-1' >Xidmətlər</Link>
            <Link to="/Qiymetler" className='bg-transparent focus:bg-mist-300 duration-300 rounded-xl px-2 py-1' >Qiymətlər</Link>
            <Link to="/Portfolio" className='bg-transparent focus:bg-mist-300 duration-300 rounded-xl px-2 py-1' >Portfolio</Link>
            <Link to="/Bloq" className='bg-transparent focus:bg-mist-300 duration-300 rounded-xl px-2 py-1' >Bloq</Link>
            <Link to="/Elaqe" className='bg-transparent focus:bg-mist-300  duration-300 rounded-xl px-2 py-1' >Əlaqə</Link>
          </ul>
          
          <button className='bg-black text-white w-full hover:bg-white hover:text-black transition-colors duration-300 py-2 w-[300px] md:w-[150px] rounded-xl cursor-pointer] mt-[-6px] md:text-[13px] md:px-2'>Pulsuz analiz</button>

        </div>
      </div> )}
       { !open && ( <GiHamburgerMenu className=' md:hidden border p-0.5 cursor-pointer w-7 h-7 rounded ' onClick={() => setOpen(!open)} 
      /> )}
    </div>
    </>
  )
}

export default FirstPage
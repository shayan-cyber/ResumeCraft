import React from 'react'
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
function Footer() {
  return (
    <div className="bg-[url('/images/bg-gradient-dark.jpg')] mt-20 z-10 relative bg-[#1a1919]  bg-no-repeat bg-center bg-cover py-12 px-8 flex justify-center rounded-t-[3rem] lg:rounded-t-[8rem]">
        <div className='md:w-1/2 pt-12 lg:pt-32 pb-4 text-white'>
          <h1 className='text-2xl lg:text-5xl font-bold text-center'>Countless success stories and counting…</h1>
          <h1 className='text-2xl lg:text-5xl font-[100] text-center'>Make your own</h1>
          <div className='flex justify-center items-center mt-12'>
            <Link href={"/select_template"}>
            <button className='bg-white text-black   p-2 px-8 rounded-lg flex justify-center items-center gap-2 mt-2 hover:scale-95 hover:rounded-2xl transition-all duration-300'>
              <p className='text-sm lg:text-xl'>Get Started now for free</p>
              <GoArrowRight className='text-xl' />
            </button>
            </Link>

          </div>

          <div className='grid grid-cols-3 gap-2 lg:gap-8 mt-32'>
            <div>
              <h1 className='text-sm lg:text-2xl font-semibold'>Product</h1>
              <h1 className='mt-1 lg:text-base text-xs'>Select template</h1>
              <h1 className='mt-1 lg:text-base text-xs'>Use default template</h1>

            </div>
            <div className='text-center'>
              <h1 className='text-sm lg:text-2xl font-semibold'>Company</h1>
              <h1 className='mt-1 lg:text-base text-xs'>About</h1>
              <h1 className='mt-1 lg:text-base text-xs'>Blog</h1>
              

            </div>
            <div className='text-right'>
              <h1 className='text-sm lg:text-2xl font-semibold'>Connect</h1>
              <h1 className='mt-1 lg:text-base text-xs'>Linkedin</h1> 
              <h1 className='mt-1 lg:text-base text-xs'>Github</h1>
          

            </div>

          </div>

        </div>
    </div>
  )
}

export default Footer
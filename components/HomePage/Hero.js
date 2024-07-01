import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';



function Hero() {

    return (
        <div className="h-[auto] w-full bg-[url('/images/bg-gradient.png')] bg-no-repeat bg-opacity-5  px-20 pt-16 pb-4">
            <div className='flex justify-center items-center'>

                <h1 className='text-8xl text-center font-[1000]'>Build Your Perfect Resume with <br></br><span className="animate-type"><Typewriter
                    options={{
                        strings: ['Ease and  ', 'Precision ,', 'Tailored'],
                        autoStart: true,
                        loop: true,
                    }}
                /></span><span className="font-[100]">for Your Dream Job</span></h1>
            </div>

           <div className='flex justify-center py-6'>

           <div className='w-1/2'>
                 <p className='text-2xl text-center'>Create a professional resume tailored to your dream job with our user-friendly builder. Choose from customizable templates, highlight your skills, and craft a standout resume in minutes.</p>
           </div>

           </div>



        </div>
    )
}

export default Hero
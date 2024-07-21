import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';



function Hero() {

    return (
        <div className="h-[60vh] lg:h-[auto] w-full bg-[url('/images/bg-gradient.png')] bg-center bg-no-repeat bg-opacity-5  px-3 lg:px-20 pt-16 pb-4">
            <div className='flex justify-center items-center'>

                <h1 className='text-4xl lg:text-8xl text-center font-[1000]'>Build Your Perfect Resume with <br></br><span className="animate-type"><Typewriter
                    options={{
                        strings: ['Ease and  ', 'Precision ,', 'Tailored'],
                        autoStart: true,
                        loop: true,
                    }}
                /></span><span className="font-[100]">for Your Dream Job</span></h1>
            </div>

            <div className='flex justify-center py-6 px-5 lg:px-0'>

                <div className='w-full lg:w-1/2'>
                    <p className='text-xl lg:text-2xl text-center'>Create a professional resume tailored to your dream job with our user-friendly builder. Choose from customizable templates, highlight your skills, and craft a standout resume in minutes.</p>
                </div>

            </div>
        </div>
    )
}

export default Hero
import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { SignInButton, SignedIn, SignedOut, UserButton, SignOutButton } from '@clerk/nextjs'
function Navbar() {
    return (
        <div className='flex justify-center pt-4 sticky top-0 z-10'>

            <div className='bg-white rounded-lg px-6 py-3 shadow-md flex items-center justify-between w-[50%] '>



                <div className='text-xl font-[560] cursor-pointer delay-75 hover:scale-105'>
                    Resume
                </div>
                <div className='text-xl font-[560] cursor-pointer delay-75 hover:scale-105'>
                    About
                </div>
                <div className='text-xl font-[560] cursor-pointer delay-75 hover:scale-105'>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <SignOutButton />
                    </SignedIn>
                </div>
                <div className='text-sm font-[560] cursor-pointer delay-75 hover:scale-105'>
                    <button className='bg-black text-white p-2 px-4 rounded-lg flex justify-center items-center gap-2'>

                        <p>Build Now</p>

                        <GoArrowRight className='text-xl' />

                    </button>
                </div>

            </div>

        </div>
    )
}

export default Navbar
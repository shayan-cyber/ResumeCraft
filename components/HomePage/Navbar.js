import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { SignInButton, SignedIn, SignedOut, UserButton, SignOutButton } from '@clerk/nextjs'
function Navbar() {
    return (
        <div className=' flex justify-center pt-4 sticky top-0 z-30 px-6 lg:px-0 '>

            <div className='bg-white rounded-lg px-6 py-3 shadow-md flex items-center justify-between w-full lg:w-[50%] '>



                <div className='text-sm nav-underline lg:text-xl font-[560] cursor-pointer delay-75  transition-all hover:scale-95'>
                    Home
                </div>
                <div className='text-sm nav-underline lg:text-xl font-[560] cursor-pointer delay-75   transition-all hover:scale-95'>
                    About
                </div>
                <div className='text-sm nav-underline lg:text-xl font-[560] cursor-pointer delay-75 hover:underline transition-all hover:scale-95'>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <SignOutButton />
                    </SignedIn>
                </div>
                <div className='text-sm font-[560] cursor-pointer delay-75 hover:underline transition-all hover:scale-95'>
                    <button className='bg-black text-white p-1 lg:p-2 px-2 lg:px-4  rounded-lg flex justify-center items-center gap-2'>

                        <p className='text-xs lg:text-xl'>Build Now</p>

                        <GoArrowRight className='lg:text-xl' />

                    </button>
                </div>

            </div>

        </div>
    )
}

export default Navbar
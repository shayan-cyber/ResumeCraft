import { TABS } from '@/constants';
import React, { useEffect } from 'react'
import { IoMdInformationCircle } from "react-icons/io";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { FaChartPie } from "react-icons/fa";
import { LuCode2 } from "react-icons/lu";
import { GrHomeRounded } from "react-icons/gr";
import Link from 'next/link';
import { PiSignInBold } from "react-icons/pi";
import { useAuth } from "@clerk/nextjs";
import { SignInButton, SignedIn, SignedOut, UserButton, SignOutButton } from '@clerk/nextjs'
import ToolTip from '../ToolTip';
// import clerkC
function Dock({ tab, setTab }) {
     // const { isLoaded, userId, sessionId, getToken } = useAuth();

     
     return (
          <div className='h-screen bg-white shadow-md'>
               <div className='flex flex-col justify-between items-center h-screen py-2'>

                    <div className='flex flex-col justify-start gap-8 p-2 px-2  h-full'>

                         <div className={`flex justify-center group relative items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab === TABS.BASIC_INFO && "bg-purple-200 text-purple-600"}`} onClick={() => setTab(TABS.BASIC_INFO)}>
                              <IoMdInformationCircle className='text-2xl' />
                              <ToolTip text={"Basic"} position={"left-10"} />
                         </div>
                         <div className={`flex justify-center group relative items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab === TABS.EDUCATION && "bg-purple-200 text-purple-600"}`} onClick={() => setTab(TABS.EDUCATION)}>
                              <PiStudentFill className='text-2xl' />
                              <ToolTip text={"Education"} position={"left-10"} />
                         </div>
                         <div className={`flex justify-center group relative items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab === TABS.WORK_EXPERIENCE && "bg-purple-200 text-purple-600"}`} onClick={() => setTab(TABS.WORK_EXPERIENCE)}>
                              <BsSuitcaseLgFill className='text-2xl' />
                              <ToolTip text={"Experience"} position={"left-10"} />
                         </div>
                         <div className={`flex justify-center group relative items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab === TABS.SKILLS && "bg-purple-200 text-purple-600"}`} onClick={() => setTab(TABS.SKILLS)}>
                              <FaChartPie className='text-2xl' />
                              <ToolTip text={"Skills"} position={"left-10"} />
                         </div>
                         <div className={`flex justify-center group relative items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab === TABS.PROJECTS && "bg-purple-200 text-purple-600"}`} onClick={() => setTab(TABS.PROJECTS)}>
                              <HiDocumentDuplicate className='text-2xl' />
                              <ToolTip text={"Project"} position={"left-10"} />
                         </div>
                         <div className={`flex justify-center group relative items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab === TABS.OTHER && "bg-purple-200 text-purple-600"}`} onClick={() => setTab(TABS.OTHER)}>
                              <BsFillPlusCircleFill className='text-2xl' />
                              <ToolTip text={"Other"} position={"left-10"} />
                         </div>
                         <div className={`flex justify-center group relative items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab === TABS.LATEX && "bg-purple-200 text-purple-600"}`} onClick={() => setTab(TABS.LATEX)}>
                              <LuCode2 className='text-2xl' />
                              <ToolTip text={"Latex"} position={"left-10"} />
                         </div>

                    </div>
                    <div className='mb-2'>
                         <SignedIn>
                              <UserButton />
                         </SignedIn>
                         <SignedOut>
                              <SignInButton>
                                   <div className={`flex justify-center items-center rounded-full p-2 cursor-pointer hover:bg-purple-200`} >
                                        <PiSignInBold className='text-2xl' />
                                   </div>
                              </SignInButton>
                         </SignedOut>
                    </div>
                    <div className=''>
                         <Link href={"/"}>
                              <div className={`flex justify-center items-center rounded-full p-3 cursor-pointer hover:bg-purple-200   `} >
                                   <GrHomeRounded className='text-2xl' />
                              </div>
                         </Link>
                    </div>

               </div>

          </div>
     )
}

export default Dock
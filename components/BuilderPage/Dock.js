import { TABS } from '@/constants';
import React from 'react'
import { IoMdInformationCircle } from "react-icons/io";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { FaChartPie } from "react-icons/fa";
import { LuCode2 } from "react-icons/lu";
function Dock({tab, setTab}) {
  return (
    <div className='h-screen bg-white'>
        <div className='flex flex-col justify-start gap-12 p-2 shadow-md h-full'>

            <div className={`flex justify-center items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab===TABS.BASIC_INFO && "bg-purple-200 text-purple-600"}` } onClick={()=>setTab(TABS.BASIC_INFO)}>
                 <IoMdInformationCircle className='text-3xl' />
            </div>
            <div className={`flex justify-center items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab===TABS.EDUCATION && "bg-purple-200 text-purple-600"}` } onClick={()=>setTab(TABS.EDUCATION)}>
                 <PiStudentFill className='text-3xl' />
            </div>
            <div className={`flex justify-center items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab===TABS.WORK_EXPERIENCE && "bg-purple-200 text-purple-600"}` } onClick={()=>setTab(TABS.WORK_EXPERIENCE)}>
                 <BsSuitcaseLgFill className='text-3xl' />
            </div>
            <div className={`flex justify-center items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab===TABS.SKILLS && "bg-purple-200 text-purple-600"}` } onClick={()=>setTab(TABS.SKILLS)}>
                 <FaChartPie className='text-3xl' />
            </div>
            <div className={`flex justify-center items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab===TABS.PROJECTS && "bg-purple-200 text-purple-600"}` } onClick={()=>setTab(TABS.PROJECTS)}>
                 <HiDocumentDuplicate className='text-3xl' />
            </div>
            <div className={`flex justify-center items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab===TABS.OTHER && "bg-purple-200 text-purple-600"}` } onClick={()=>setTab(TABS.OTHER)}>
                 <BsFillPlusCircleFill className='text-3xl' />
            </div>
            <div className={`flex justify-center items-center rounded-full p-2 cursor-pointer hover:bg-purple-200  ${tab===TABS.LATEX && "bg-purple-200 text-purple-600"}` } onClick={()=>setTab(TABS.LATEX)}>
                 <LuCode2 className='text-3xl' />
            </div>

        </div>

    </div>
  )
}

export default Dock
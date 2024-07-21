import React from 'react'
import { TABS_SELECT_TEMPLATE } from '@/constants';
function Tabs({selectedTab, setSelectedTab}) {
  return (
    <div>
        <div className='flex justify-start pt-4 '>
            <button className={`${selectedTab === TABS_SELECT_TEMPLATE.YOUR_RESUMES && 'bg-white shadow-lg text-lg lg:text-xl'} pt-3 transition-all delay-75 w-1/2  md:w-60 hover:text-lg lg:hover:text-xl pb-6 font-[550] text-lg px-8 rounded-t-2xl`}  onClick={() => setSelectedTab(TABS_SELECT_TEMPLATE.YOUR_RESUMES)}>
                Your Resumes
            </button>
            <button className={`${selectedTab === TABS_SELECT_TEMPLATE.TEMPLATES && 'bg-white shadow-lg text-lg lg:text-xl'} pt-3 transition-all delay-75 w-1/2  md:w-60 hover:text-lg lg:hover:text-xl pb-6 font-[550] text-lg px-8 rounded-t-2xl`} onClick={() => setSelectedTab(TABS_SELECT_TEMPLATE.TEMPLATES)}>
                Templates
            </button>
        </div>

    </div>
    
  )
}

export default Tabs
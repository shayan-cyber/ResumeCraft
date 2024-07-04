import React, { useState } from 'react'
import BuilderForm from './BuilderForm'
import Dock from './Dock'
import { TABS } from '@/constants'
import { RiOpenaiLine } from "react-icons/ri";

function BuilderPage() {

  const [tab, setTab] = useState(TABS.BASIC_INFO)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='relative '>

      {
        isLoading && (
          <div className='absolute inset-0 flex justify-center items-center backdrop-blur-sm z-[999]'>
            <div className='text-black animate-spin text-8xl'>
              <RiOpenaiLine />
            </div>
          </div>
        )
      }
      <div className='flex justify-start'>
        <div className='h-screen flex items-start'>

          <Dock tab={tab} setTab={setTab} />

        </div>

        <div className="fill">
          <BuilderForm tab={tab} isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>

      </div>

    </div>
  )
}

export default BuilderPage
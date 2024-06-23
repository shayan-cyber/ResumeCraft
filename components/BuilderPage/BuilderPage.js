import React, { useState } from 'react'
import BuilderForm from './BuilderForm'
import Dock from './Dock'
import { TABS } from '@/constants'


function BuilderPage() {

  const [tab, setTab] = useState(TABS.BASIC_INFO)

  return (
    <div>
      <div className='flex justify-start'>
        <div className='h-screen flex items-start'>

          <Dock tab={tab} setTab={setTab} />

        </div>

        <div className="fill">
          <BuilderForm tab={tab} />
        </div>

      </div>

    </div>
  )
}

export default BuilderPage
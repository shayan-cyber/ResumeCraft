import React from 'react'

function Default({basicDetails}) {
  return (
    <div className='w-full p-6 shadow-md border-2'>

        <div>

            <h1 className='text-6xl'>{basicDetails?.name}</h1>
            <h6 className='text-lg text-blue-600'>{basicDetails?.title}</h6>

        </div>

    </div>
  )
}

export default Default
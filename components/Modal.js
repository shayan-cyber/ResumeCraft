import React from 'react'

function Modal({children}) {
  return (
    <div className='absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center z-10'>
        {children}
    </div>
  )
}

export default Modal
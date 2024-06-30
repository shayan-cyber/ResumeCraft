import React from 'react'

function Modal({children, onClick}) {
  return (
    <div className='absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center z-10' onClick={()=> onClick()}>
        {children}
    </div>
  )
}

export default Modal
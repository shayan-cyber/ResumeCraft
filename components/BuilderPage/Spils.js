import React from 'react'
import { RxCross2 } from "react-icons/rx";
function Spils({text , onClick, id}) {
  return (
    <div className='rounded-full text-center bg-purple-200 text-purple-600 flex justify-center py-1 px-3 hover:bg-purple-300 cursor-pointer' onClick={()=>onClick(id)}>
      <div className='flex justify-center items-center'>
        <p className='text-xs'>{text}</p>
        <RxCross2 className='text-xs'/>
      </div>
    </div>
  )
}

export default Spils
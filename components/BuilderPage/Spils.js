import React from 'react'
import { RxCross2 } from "react-icons/rx";
function Spils({text , onEdit, id, onDelete}) {
  return (
    <div className='rounded-full text-center bg-purple-200 text-purple-600 flex justify-center py-1 px-3  cursor-pointer' onClick={()=>onEdit(id)}>
      <div className='flex justify-center items-center gap-2'>
        <p className='text-xs'>{text}</p>
        <RxCross2 className='text-sm hover:text-purple-800 hover:scale-110 mb-[1px]' onClick={()=> onDelete(id)}/>
      </div>
    </div>
  )
}

export default Spils
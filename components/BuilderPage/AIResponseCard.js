import React from 'react'
import { LuBrainCircuit } from "react-icons/lu";
function AIResponseCard({description, setSelectResponse}) {

    let trimmedDesc = description?.length > 300? description.substring(0, 300) + "..." : description
  return (
    <div className='border-l-4 border-l-purple-500 p-3 border-2 rounded-lg mb-1 cursor-pointer hover:shadow-md' onClick={()=> setSelectResponse(description)}>

        {/* <button className=' text-purple-500 '><LuBrainCircuit /></button> */}
        <p className='text-xs'>{trimmedDesc}</p>
    </div>
  )
}

export default AIResponseCard
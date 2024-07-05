import React from 'react'
import { RiBrainLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
function SuggestionCard({closeCard, suggestion}) {
  return (
    <div className='bg-white rounded-lg p-4 z-10  shadow-lg shadow-gray-300 max-h-[300px] overflow-y-auto'>
          <div className='flex justify-between items-center'>
            <div className='flex justify-start items-center gap-1 mb-2'>

              <div>
                <RiBrainLine className='text-orange-400' />
              </div>
              <h1 className='text-orange-400 mb-[2px]'>Suggestions</h1>

            </div>
            <div className='mb-1 cursor-pointer' onClick={()=> closeCard()}>
                <RxCross2 className='text-xl'/>
            </div>

          </div>
          <div>
            <p className='text-xs'>{suggestion}</p>
          </div>
        </div>
  )
}

export default SuggestionCard
import React from 'react'

function ToolTip({position, text}) {
  return (
    <span className={`absolute  w-auto text-start text-black scale-0 group-hover:scale-100 z-[999] font-medium bg-white text-xs p-1 px-2 shadow-lg rounded-md ${position}`}>{text}</span>
  )
}

export default ToolTip
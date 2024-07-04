import React, { useState } from 'react'
import { RiBrainLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { RiOpenaiLine } from "react-icons/ri";
import { TbMessageChatbot } from "react-icons/tb";
function AIDock({ setATSModalOpen, genSuggestions, isLoading, setIsLoading }) {
    const [open, setOpen] = useState(false)
    return (
        <div className={open ? 'flex flex-col justify-start items-center gap-3 p-[.35rem] pt-4 shadow-2xl border-[1px]  rounded-full  bg-white z-20' : 'flex flex-col justify-start items-center gap-2 p-1 rounded-md bg-transparent z-20'}>

            {
                open && (
                    <>
                        <div className='rounded-full p-2 bg-purple-500 text-white text-xl  cursor-pointer' onClick={()=> setATSModalOpen(true)}>
                            <ImStatsDots />
                        </div>
                        <div className='rounded-full p-2 bg-purple-500 text-white text-xl font-bold cursor-pointer' onClick={()=> genSuggestions()}>
                            <RiOpenaiLine />
                        </div>
                        <div className='rounded-full p-2 bg-purple-500 text-white text-xl font-bold cursor-pointer'>
                            <TbMessageChatbot />
                        </div>
                    </>

                )
            }
            <div className={open ? 'rounded-full p-2 bg-purple-500 text-white text-4xl cursor-pointer mt-2 animate-rotate45 z-20' : 'rounded-full p-2 mt-2 bg-purple-500 text-white text-4xl animate-bounce cursor-pointer animate-rotate0 z-20'} onClick={() => setOpen(!open)}>

                <RiBrainLine />

            </div>





        </div >
    )
}

export default AIDock
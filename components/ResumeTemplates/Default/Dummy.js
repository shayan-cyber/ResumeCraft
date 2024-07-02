import React from 'react'
import { sampleData } from '@/constants';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from 'next/link';
function Dummy() {
    return (

        <div className={'w-full p-6 h-full shadow-md relative rounded-2xl'}>
            <div>

                <h1 className='text-xl'>{sampleData?.basicDetails?.name}</h1>
                <h6 className='text-xs text-blue-600 mt-1'>{sampleData?.basicDetails?.title}</h6>

            </div>
            <div className='flex justify-between items-center my-4 text-[0.6rem]'>
                <div className='flex justify-start items-center'>
                    <p className='text-blue-600'>@</p>
                    <p className='ml-1'>{sampleData?.basicDetails?.email}</p>
                </div>

                <div className='flex justify-start items-center'>
                    <p className='text-blue-600'><IoIosCall /></p>
                    <p className='ml-1'>{sampleData?.basicDetails?.phone}</p>
                </div>
            </div>

            <div className='flex justify-start gap-12 items-center my-1 text-[0.6rem]'>
                <div className='flex justify-start items-center'>
                    <div href={sampleData?.basicDetails.linkedInLink}><p className='text-blue-600'><FaLinkedinIn /></p></div>
                </div>
                <div className='flex justify-start items-center'>
                    <div href={sampleData?.basicDetails.linkedInLink}><p className='text-blue-600'><FaGithub /></p></div>
                </div>
            </div>


            <div className='relative'>

                <div className='flex justify-start gap-2 items-baseline'>
                    <h1 className='text-sm mt-2 mb-0'>EXPERIENCE</h1>

                </div>
                <hr className='border-t-2 border-blue-600' />
                <div className=' my-1'>

                    {(sampleData?.WorkDetails).map((item, key) => {
                        return (
                            <>
                                <div className='my-2'>
                                    <h1 className='text-xs'>{item?.title}</h1>
                                    <div className='flex justify-between items-center'>
                                        <h1 className='text-[0.6rem] text-blue-600'>{item?.company_name}</h1>
                                        <h1 className='text-[0.4rem] font-[550]'>{item?.start_date}  to  {item?.end_date}</h1>
                                    </div>
                                    <div>
                                        <p className='text-[0.4rem]'>{item?.description}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>

            <div className='relative'>


                <div className='flex justify-start gap-2 items-baseline'>
                    <h1 className='text-sm mb-0'>Skills</h1>

                </div>

                <hr className='border-t-2 border-blue-600' />
                <ul className=' my-1 flex justify-start flex-wrap'>

                    {(sampleData?.skillsDetails).map((item, key) => {
                        return (
                            <>
                                <li className='mr-2 '>
                                    <p className='text-[.5rem] font-[550]'> {item?.text}</p>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </div>
            <h1 className='text-sm mt-3 mb-0'>EDUCATION</h1>
            <hr className='border-t-2 border-blue-600' />
            <div className=' my-1'>

                {(sampleData?.educationDetails).map((item, key) => {
                    return (
                        <>
                            <div className='my-1'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-[0.5rem]'>{item?.level} in {item?.area_of_study}</h1>
                                    <h1 className='text-[0.4rem] font-[550]'>{item?.start_date}  to  {item?.end_date}</h1>
                                </div>
                                <div className='flex justify-start items-baseline gap-2'>
                                    <h1 className='text-[0.5rem] text-blue-600'>{item?.name}</h1>
                                    <h1 className='text-[0.4rem]'>{item?.result}</h1>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>

            <div className='relative'>

                <div className='flex justify-start gap-2 items-baseline'>
                    <h1 className='text-sm mt-1 mb-0'>Projects</h1>
                </div>
                <hr className='border-t-2 border-blue-600' />
                <div className=' my-1'>

                    {(sampleData?.projectDetails).map((item, key) => {
                        return (
                            <>
                                <div className='my-1'>
                                    <div className='flex justify-between items-center'>
                                        <div href={item?.link} className=''><h1 className='text-[0.6rem] text-blue-600 flex justify-start gap-2 items-baseline'>{item?.name} {" "} <FaExternalLinkAlt className='text-[.45rem]' /> </h1></div>
                                        <h1 className='text-[0.3rem] font-[550]'>{item?.start_date}  to  {item?.end_date}</h1>
                                    </div>
                                    <div className='flex justify-start items-baseline gap-2'>
                                        <h1 className='text-[0.4rem]  font-[550]'>{item?.tech_stack}</h1>
                                    </div>
                                    <p className='text-[0.4rem]'>{item?.description}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Dummy
import Link from 'next/link';
import React, { useState } from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { sampleData } from '@/constants';
import { PiWarningCircleFill } from "react-icons/pi";

import SuggestionCard from '../../BuilderPage/SuggestionCard';
const Default = React.forwardRef(({ basicDetails, WorkDetails, educationDetails, projectDetails, skillsDetails, suggestions }, ref) =>{


  console.log({ suggestions });
  const [openExpSuggestion, setOpenExpSuggestion] = useState(false)
  const [openProjectSuggestion, setOpenProjectSuggestion] = useState(false)
  const [openSkillsSuggestion, setOpenSkillsSuggestion] = useState(false);
  return (

    <div className={suggestions?.experience || suggestions?.project || suggestions?.skills ? 'w-full p-6 shadow-md border-2 border-orange-500 relative' : 'w-full p-6 shadow-md border-2 relative bg-white'} ref={ref}>
      <div>

        <h1 className='text-5xl'>{basicDetails?.name}</h1>
        <h6 className='text-md text-blue-600 mt-2'>{basicDetails?.title}</h6>

      </div>
      <div className='flex justify-between items-center my-4'>
        <div className='flex justify-start items-center'>
          <p className='text-blue-600'>@</p>
          <p className='ml-1'>{basicDetails?.email}</p>
        </div>

        <div className='flex justify-start items-center'>
          <p className='text-blue-600'><IoIosCall /></p>
          <p className='ml-1'>{basicDetails?.phone}</p>
        </div>
      </div>

      <div className='flex justify-start gap-12 items-center my-4'>
        <div className='flex justify-start items-center'>
          <Link href={basicDetails.linkedInLink}><p className='text-blue-600'><FaLinkedinIn /></p></Link>
        </div>
        <div className='flex justify-start items-center'>
          <Link href={basicDetails.linkedInLink}><p className='text-blue-600'><FaGithub /></p></Link>
        </div>
      </div>


      <div className='relative'>

        {
          openExpSuggestion && (
            <div className='absolute top-16 inset-0'>
              <SuggestionCard closeCard={() => { setOpenExpSuggestion(false) }} suggestion={suggestions?.experience} />
            </div>
          )
        }
        <div className='flex justify-start gap-2 items-baseline'>
          <h1 className='text-2xl mt-6 mb-1'>EXPERIENCE</h1>
          {suggestions?.experience && (
            <div className='cursor-pointer text-xl text-orange-500 animate-bounce' onClick={() => setOpenExpSuggestion(true)}>
              <PiWarningCircleFill />
            </div>
          )}
        </div>
        <hr className='border-t-4 border-blue-600' />
        <div className=' my-4'>

          {(WorkDetails?.length > 0 ? WorkDetails : sampleData?.WorkDetails).map((item, key) => {
            return (
              <>
                <div className='my-4'>
                  <h1 className='text-lg'>{item?.title}</h1>
                  <div className='flex justify-between items-center'>
                    <h1 className='text-sm text-blue-600'>{item?.company_name}</h1>
                    <h1 className='text-xs font-semibold'>{item?.start_date}  to  {item?.end_date}</h1>
                  </div>
                  <div>
                    <p className='text-[0.65rem]'>{item?.description}</p>
                  </div>
                </div>
              </>
            )
          })}

        </div>
      </div>

      <div className='relative'>

        {
          openSkillsSuggestion && (

            <div className='absolute top-12 left-0 right-0 z-10'>
              <SuggestionCard closeCard={() => { setOpenSkillsSuggestion(false) }} suggestion={suggestions?.skills} />
            </div>
          )
        }
        <div className='flex justify-start gap-2 items-baseline'>
          <h1 className='text-2xl mb-1'>Skills</h1>
          {suggestions?.skills && (
            <div className='cursor-pointer text-xl text-orange-500 animate-bounce' onClick={() => setOpenSkillsSuggestion(true)}>
              <PiWarningCircleFill />
            </div>
          )}
        </div>

        <hr className='border-t-4 border-blue-600' />
        <ul className=' my-2 flex justify-start flex-wrap'>

          {(skillsDetails?.length > 0 ? skillsDetails : sampleData?.skillsDetails).map((item, key) => {
            return (
              <>
                <li className='mr-2 '>
                  <p className='text-sm font-semibold'> {item?.text}</p>
                </li>
              </>
            )
          })}
        </ul>
      </div>
      <h1 className='text-2xl mt-6 mb-1'>EDUCATION</h1>
      <hr className='border-t-4 border-blue-600' />
      <div className=' my-4'>

        {(educationDetails?.length > 0 ? educationDetails : sampleData?.educationDetails).map((item, key) => {
          return (
            <>
              <div className='my-4'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-lg'>{item?.level} in {item?.area_of_study}</h1>
                  <h1 className='text-xs font-semibold'>{item?.start_date}  to  {item?.end_date}</h1>
                </div>
                <div className='flex justify-start items-baseline gap-2'>
                  <h1 className='text-md text-blue-600'>{item?.name}</h1>
                  <h1 className='text-xs'>{item?.result}</h1>
                </div>
              </div>
            </>
          )
        })}

      </div>

      <div className='relative'>
        {
          openProjectSuggestion && (
            <div className='absolute top-16 left-0 z-5 right-0 pb-16'>
              <SuggestionCard closeCard={() => { setOpenProjectSuggestion(false) }} suggestion={suggestions?.project} />
            </div>
          )
        }
        <div className='flex justify-start gap-2 items-baseline'>
          <h1 className='text-2xl mt-6 mb-1'>Projects</h1>
          {suggestions?.project && (
            <div className='cursor-pointer text-xl text-orange-500 animate-bounce' onClick={() => setOpenProjectSuggestion(true)}>
              <PiWarningCircleFill />
            </div>
          )}
        </div>
        <hr className='border-t-4 border-blue-600' />
        <div className=' my-4'>

          {(projectDetails?.length > 0 ? projectDetails : sampleData?.projectDetails).map((item, key) => {
            return (
              <>
                <div className='my-4'>
                  <div className='flex justify-between items-center'>
                    <Link href={item?.link}><h1 className='text-lg text-blue-600'>{item?.name} {" "} <FaExternalLinkAlt /> </h1></Link>
                    <h1 className='text-xs font-semibold'>{item?.start_date}  to  {item?.end_date}</h1>
                  </div>
                  <div className='flex justify-start items-baseline gap-2'>
                    <h1 className='text-xs'>{item?.tech_stack}</h1>
                  </div>
                  <p className='text-[0.65rem]'>{item?.description}</p>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
})

export default Default
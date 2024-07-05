import Link from 'next/link';
import React, { useState } from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { sampleData } from '@/constants';
import { PiWarningCircleFill } from "react-icons/pi";
import DOMPurify from 'dompurify'
import SuggestionCard from '../../BuilderPage/SuggestionCard';
const Default = ({ basicDetails, WorkDetails, educationDetails, projectDetails, skillsDetails, otherDetails, suggestions, font, color }) => {


  console.log({ basicDetails });
  const [openExpSuggestion, setOpenExpSuggestion] = useState(false)
  const [openProjectSuggestion, setOpenProjectSuggestion] = useState(false)
  const [openSkillsSuggestion, setOpenSkillsSuggestion] = useState(false);
  return (

    <div className={suggestions?.experience || suggestions?.project || suggestions?.skills ? `w-full p-6 shadow-md border-[2px] border-yellow-400 relative ${font}` : `w-full p-6 shadow-md border-2 relative bg-white ${font}`} >
      <div>

        <h1 className='text-3xl'>{basicDetails?.name}</h1>
        <h6 className='text-md text-blue-600 mt-1' style={{
          color: color
        }}>{basicDetails?.title}</h6>

      </div>
      <div className='flex justify-between items-center my-1'>
        <div className='flex justify-start items-center'>
          <p className='text-blue-600' style={{
            color: color
          }}>@</p>
          <p className='ml-1'>{basicDetails?.email}</p>
        </div>

        <div className='flex justify-start items-center'>
          <p className='text-blue-600' style={{
            color: color
          }}><IoIosCall /></p>
          <p className='ml-1'>{basicDetails?.phone}</p>
        </div>
      </div>

      <div className='flex justify-start gap-12 items-center my-2'>
        <div className='flex justify-start items-center'>
          <Link href={basicDetails.linkedInLink}><p className='text-blue-600' style={{
            color: color
          }}><FaLinkedinIn /></p></Link>
        </div>
        <div className='flex justify-start items-center'>
          <Link href={basicDetails.linkedInLink}><p className='text-blue-600' style={{
            color: color
          }}><FaGithub /></p></Link>
        </div>
      </div>


      <div className='relative'>

        {
          openExpSuggestion && (
            <div className='absolute top-12 inset-0'>
              <SuggestionCard closeCard={() => { setOpenExpSuggestion(false) }} suggestion={suggestions?.experience} />
            </div>
          )
        }
        <div className='flex justify-start gap-2 items-baseline'>
          <h1 className='text-xl mt-0 mb-1'>EXPERIENCE</h1>
          {suggestions?.experience && (
            <div className='cursor-pointer text-xl text-orange-400 animate-bounce' onClick={() => setOpenExpSuggestion(true)}>
              <PiWarningCircleFill />
            </div>
          )}
        </div>
        <hr className='border-t-[2px] border-blue-600' style={{
          borderColor: color
        }} />
        <div className=' my-1'>

          {(WorkDetails?.length > 0 ? WorkDetails : sampleData?.WorkDetails).map((item, key) => {
            return (
              <>
                <div className='my-2'>
                  <h1 className='text-lg'>{item?.title}</h1>
                  <div className='flex justify-between items-center'>
                    <h1 className='text-sm text-blue-600' style={{
                      color: color
                    }}>{item?.company_name}</h1>
                    <h1 className='text-xs font-semibold'>{item?.start_date}  to  {item?.end_date}</h1>
                  </div>
                  <div>
                    <p className='text-[0.65rem]' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.description) }}></p>
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

            <div className='absolute top-10 left-0 right-0 z-10'>
              <SuggestionCard closeCard={() => { setOpenSkillsSuggestion(false) }} suggestion={suggestions?.skills} />
            </div>
          )
        }
        <div className='flex justify-start gap-2 items-baseline'>
          <h1 className='text-xl mb-1'>SKILLS</h1>
          {suggestions?.skills && (
            <div className='cursor-pointer text-xl text-orange-400 animate-bounce' onClick={() => setOpenSkillsSuggestion(true)}>
              <PiWarningCircleFill />
            </div>
          )}
        </div>

        <hr className='border-t-[2px] border-blue-600' style={{
          borderColor: color
        }} />
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
      <h1 className='text-xl mt-3 mb-1'>EDUCATION</h1>
      <hr className='border-t-[2px] border-blue-600' style={{
        borderColor: color
      }} />
      <div className=' my-2'>

        {(educationDetails?.length > 0 ? educationDetails : sampleData?.educationDetails).map((item, key) => {
          return (
            <>
              <div className='my-1'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-sm'>{item?.level} in {item?.area_of_study}</h1>
                  <h1 className='text-xs font-semibold'>{item?.start_date}  to  {item?.end_date}</h1>
                </div>
                <div className='flex justify-start items-baseline gap-2'>
                  <h1 className='text-sm text-blue-600' style={{
                    color: color
                  }}>{item?.name}</h1>
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
            <div className='absolute top-10 left-0 z-5 right-0 pb-16'>
              <SuggestionCard closeCard={() => { setOpenProjectSuggestion(false) }} suggestion={suggestions?.project} />
            </div>
          )
        }
        <div className='flex justify-start gap-2 items-baseline'>
          <h1 className='text-xl mt-1 mb-1'>PROJECTS</h1>
          {suggestions?.project && (
            <div className='cursor-pointer text-xl text-orange-400 animate-bounce' onClick={() => setOpenProjectSuggestion(true)}>
              <PiWarningCircleFill />
            </div>
          )}
        </div>
        <hr className='border-t-[2px] border-blue-600' style={{
          borderColor: color
        }} />
        <div className=' my-2'>

          {(projectDetails?.length > 0 ? projectDetails : sampleData?.projectDetails).map((item, key) => {
            return (
              <>
                <div className='my-2' key={key}>
                  <div className='flex justify-between items-center'>
                    <Link href={item?.link}><h1 className='text-lg text-blue-600 flex justify-start items-center gap-2' style={{
                      color: color
                    }}>{item?.name} {" "} <FaExternalLinkAlt className='text-xs' /> </h1></Link>
                    <h1 className='text-xs font-semibold'>{item?.start_date}  to  {item?.end_date}</h1>
                  </div>
                  <div className='flex justify-start items-baseline gap-2'>
                    <h1 className='text-xs'>{item?.tech_stack}</h1>
                  </div>
                  <p className='text-[0.65rem]' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.description) }}></p>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <div className='relative'>
        <div className='flex justify-start gap-2 items-baseline'>
          <h1 className='text-xl mt-1 mb-1'>OTHERS</h1>

        </div>
        <hr className='border-t-[2px] border-blue-600' style={{
          borderColor: color
        }} />

        <div className=' my-2'>

          {(otherDetails?.length > 0 ? otherDetails : sampleData?.otherDetails).map((item, key) => {
            return (
              <>
                <div className='my-2 text-[.7rem] list-disc' key={key}>
                  <ul className=''>
                    <li className="font-[550]"><p>{item?.description}</p></li>

                  </ul>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Default.displayName = "Default"
export default Default
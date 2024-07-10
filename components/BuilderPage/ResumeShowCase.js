'use client'
import React, { useEffect, useState } from 'react'
import Default from '../ResumeTemplates/Default/Default'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
const ResumeShowCase = ({ template_name, basicDetails, WorkDetails, educationDetails, projectDetails, skillsDetails, otherDetails, suggestions, font, color }) => {

  const searchParams = useSearchParams()
  const router = useRouter()
  // const [template, setTemplate] = useState(null)

  let switcher = {
    Default: <Default basicDetails={basicDetails} WorkDetails={WorkDetails} educationDetails={educationDetails} projectDetails={projectDetails} skillsDetails={skillsDetails} otherDetails={otherDetails} suggestions={suggestions} font={font} color={color} />,
  }

  // console.log({ basicDetails });

  const template = searchParams.get('template')
  console.log({template});
  let selectedTemplate = switcher[template]
  if (template && !selectedTemplate) {
    router.push("/404")
  }
  return (
    <div className='w-full h-auto'>
      {selectedTemplate ? selectedTemplate : <></>}
    </div>
  )
}

export default (ResumeShowCase)
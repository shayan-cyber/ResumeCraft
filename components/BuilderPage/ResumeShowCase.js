'use client'
import React, { useEffect, useState } from 'react'
import Default from '../ResumeTemplates/Default/Default'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
const ResumeShowCase = ({template_name, basicDetails,WorkDetails,educationDetails, projectDetails, skillsDetails, suggestions },ref) =>{
    
  const searchParams = useSearchParams()
  const router = useRouter()
  const [template, setTemplate] = useState(null)

  let switcher ={
        default:<Default basicDetails={basicDetails} WorkDetails={WorkDetails} educationDetails={educationDetails} projectDetails={projectDetails} skillsDetails={skillsDetails} suggestions={suggestions} ref={ref}/>,
  }

  
  
  useEffect(()=>{
    const template = searchParams.get('template')
    let selectedTemplate = switcher[template]
    setTemplate(selectedTemplate)
    // console.log({selectedTemplate});
    if(template && !selectedTemplate){
      router.push("/404")
    }   
  },[searchParams])
  return (
    <div className='w-full h-auto' ref={ref}>
        {template ? template : <></>}
    </div>
  )
}

export default React.forwardRef(ResumeShowCase)
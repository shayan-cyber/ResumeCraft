import React from 'react'
import Default from '../ResumeTemplates/Default'

function ResumeShowCase({template_name, basicDetails,WorkDetails,educationDetails, projectDetails }) {
    let switcher ={
        default:<Default basicDetails={basicDetails} WorkDetails={WorkDetails} educationDetails={educationDetails} projectDetails={projectDetails}/>,

    }
  return (
    <div className='w-full '>
        {switcher[template_name]}
    </div>
  )
}

export default ResumeShowCase
import React from 'react'
import Default from '../ResumeTemplates/Default'

function ResumeShowCase({template_name, basicDetails}) {
    let switcher ={
        default:<Default basicDetails={basicDetails}/>,

    }
  return (
    <div className='w-full'>
        {switcher[template_name]}
    </div>
  )
}

export default ResumeShowCase
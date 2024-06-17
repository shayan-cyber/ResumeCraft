import React, { useState } from 'react'
import BasicInfo from './FormSections/BasicInfo'
import ResumeShowCase from './ResumeShowCase';

function BuilderForm() {

    const [basicDetails, setBasicDetails] = useState({
        name:"",
        title:"",
        linkedInLink:"",
        githubLink:"",
        other:"",
        email:"",
        phone:"",
    })

    console.log(basicDetails);
  return (
    <div>
        <div className='flex justify-center items-start'>
            <div className='w-full md:w-1/2'>
              <BasicInfo basicDetails={basicDetails} setBasicDetails={setBasicDetails} />
            </div>
        </div>


        <div className='flex justify-center px-4 py-6'>

          <ResumeShowCase template_name={"default"} basicDetails={basicDetails} />

        </div>
    </div>
  )
}

export default BuilderForm
import React, { useState } from 'react'
import BasicInfo from './FormSections/BasicInfo'
import ResumeShowCase from './ResumeShowCase';
import WorkExperienceInfo from './FormSections/WorkExperienceInfo';
import EducationInfo from './FormSections/EducationInfo';
import ProjectsInfo from './FormSections/ProjectsInfo';
import OtherInfo from './FormSections/OtherInfo';
import { FaPercentage } from "react-icons/fa";
import Modal from '../Modal';
import axios from 'axios';
function BuilderForm({ tab }) {

  const [basicDetails, setBasicDetails] = useState({
    name: "John Doe",
    title: "Frontend Developer",
    linkedInLink: "https://www.linkedin.com/",
    githubLink: "https://github.com/",
    other: "",
    email: "abc@gmail.com",
    phone: "+111234567890",
  })
  const [WorkDetails, setWorkDetails] = useState([])
  const [educationDetails, setEducationDetails] = useState([])
  const [projectDetails, setProjectDetails] = useState([])
  const [otherDetails, setOtherDetails] = useState([])
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [jobDescription, setJobDescription] = useState("")
  const form_sections = {
    BASIC_INFO: <BasicInfo basicDetails={basicDetails} setBasicDetails={setBasicDetails} />,
    WORK_EXPERIENCE: <WorkExperienceInfo WorkDetails={WorkDetails} setWorkDetails={setWorkDetails} />,
    EDUCATION: <EducationInfo educationDetails={educationDetails} setEducationDetails={setEducationDetails} />,
    PROJECTS: <ProjectsInfo projectDetails={projectDetails} setProjectDetails={setProjectDetails} />,
    OTHER: <OtherInfo otherDetails={otherDetails} setOtherDetails={setOtherDetails} />
  }
  console.log(projectDetails);


  const buildResumeDescription = (resumeDescription) => {
    let description = `
      Work Experience : ${JSON.stringify(WorkDetails)},
      Education: ${JSON.stringify(educationDetails)},
      Project Details: ${JSON.stringify(projectDetails)}
    
    `
    return description
  }

  const calculateScore = () => {
    if (loading || jobDescription === "")
      return

    setLoading(true)

    axios.post("/api/gemini/ats", {
      resumeDescription:buildResumeDescription(),
      jobDescription: jobDescription
    }).then((res) => {
      // console.log({ res });
      console.log(JSON.parse(res?.data?.text))
      setLoading(false)
      setOpenModal(false)
      
    })
    
    .catch((e) => {
      console.log(e);
      setLoading(false)
    })
  }



  const ModalChildren = () => {
    return (
      <div className='rounded-md p-8 w-[50%] bg-white'>

        <div className='block'>
          <label htmlFor='job-description'>Job Description</label>
          <textarea rows={8} className=' input-form mt-2' value={jobDescription} onChange={(e) => setJobDescription(e?.target?.value)}></textarea>
        </div>
        <div className=''>

          <button className='p-2 rounded-md bg-purple-primary text-white mt-4' onClick={() => calculateScore()}>
            Calculate Score
          </button>

        </div>

      </div>
    )
  }

  return (
    <div className='relative'>

      {openModal && (<Modal children={<ModalChildren />} />)}

      <div className='grid grid-cols-2 gap-0'>
        <div>
          <div className='flex justify-center items-start px-4 py-6 border-r-2  h-screen'>

            <div className='w-full border-2 p-6 rounded-xl'>
              {form_sections[tab]}
            </div>

          </div>
        </div>

        <div className='px-4 py-4 max-h-screen overflow-y-auto'>

          <div className='flex justify-end items-center'>

            <h1 className='text-md '>Calculate Score</h1>
            <button className='p-2 rounded-full text-white bg-purple-primary my-2 border-2 border-purple-800 ml-2' onClick={() => {
              setOpenModal(true)
            }} ><FaPercentage /></button>

          </div>

          <div className='flex justify-center '>
            <ResumeShowCase template_name={"default"} basicDetails={basicDetails} WorkDetails={WorkDetails} educationDetails={educationDetails} projectDetails={projectDetails} />
          </div>
        </div>

      </div>




    </div>
  )
}

export default BuilderForm
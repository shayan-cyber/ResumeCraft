import React, { useState , useRef} from 'react'
import BasicInfo from './FormSections/BasicInfo'
import ResumeShowCase from './ResumeShowCase';
import WorkExperienceInfo from './FormSections/WorkExperienceInfo';
import EducationInfo from './FormSections/EducationInfo';
import ProjectsInfo from './FormSections/ProjectsInfo';
import OtherInfo from './FormSections/OtherInfo';
import { FaPercentage } from "react-icons/fa";
import Modal from '../Modal';
import axios from 'axios';
import LatexEditor from './FormSections/LatexEditor';
import { TABS } from '@/constants';
import LatexResumeShowCase from './LatexResumeShowCase';
import AIDock from './AIDock';
import Skills from './FormSections/Skills';
import { MdOutlineFileDownload } from "react-icons/md";
import { useReactToPrint } from 'react-to-print'
function BuilderForm({ tab }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
  const [skillsDetails, setSkillsDetails] = useState([])
  const [otherDetails, setOtherDetails] = useState([])
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [jobDescription, setJobDescription] = useState("")
  const [atsScore, setAtsScore] = useState({})
  const [latexCode, setLatexCode] = useState(null)
  const [suggestions, setSuggestions] = useState({
    experience:"",
    project:"",
    skills:"",
  })

  const form_sections = {
    BASIC_INFO: <BasicInfo basicDetails={basicDetails} setBasicDetails={setBasicDetails} />,
    WORK_EXPERIENCE: <WorkExperienceInfo WorkDetails={WorkDetails} setWorkDetails={setWorkDetails} />,
    EDUCATION: <EducationInfo educationDetails={educationDetails} setEducationDetails={setEducationDetails} />,
    PROJECTS: <ProjectsInfo projectDetails={projectDetails} setProjectDetails={setProjectDetails} />,
    OTHER: <OtherInfo otherDetails={otherDetails} setOtherDetails={setOtherDetails} />,
    SKILLS: <Skills skillsDetails={skillsDetails} setSkillsDetails={setSkillsDetails} />,
    LATEX: <LatexEditor latexCode={latexCode} setLatexCode={setLatexCode} />
  }
  console.log(projectDetails);


  const buildResumeDescription = (resumeDescription) => {
    let description = `
      Work Experience : ${JSON.stringify(WorkDetails)},
      Education: ${JSON.stringify(educationDetails)},
      Project Details: ${JSON.stringify(projectDetails)}
      skills: ${JSON.stringify(skillsDetails)}
    `
    return description
  }

  const calculateScore = () => {
    if (loading || jobDescription === "")
      return

    setLoading(true)

    axios.post("/api/gemini/ats", {
      resumeDescription: buildResumeDescription(),
      jobDescription: jobDescription
    }).then((res) => {
      // console.log({ res });
      console.log(JSON.parse(res?.data?.text))
      setAtsScore(JSON.parse(res?.data?.text))
      setLoading(false)
      setOpenModal(false)

    })

      .catch((e) => {
        console.log(e);
        setLoading(false)
      })
  }


  const genSuggestions = () => {
    if (loading)
      return


    setLoading(true)

    axios.post("/api/gemini/suggestions", {
      resumeDescription: buildResumeDescription(),
      title: basicDetails?.title
    }).then((res) => {
      console.log({res});
      console.log((res?.data?.text))
      // setAtsScore(JSON.parse(res?.data?.text))
      setSuggestions({
        experience:res?.data?.text?.experience ? res?.data?.text?.experience : "",
        project :res?.data?.text?.project ? res?.data?.text?.project : "",
        skills : res?.data?.text?.skills ? res?.data?.text?.skills : "",
      })
      setLoading(false)
      // setOpenModal(false)
    })
      .catch((e) => {
        console.log(e);
        setLoading(false)
      })
  }

  console.log({suggestions});
  const ModalChildren = () => {
    return (
      <div className='rounded-md p-8 w-[50%] bg-white' onClick={(e) => e.stopPropagation()}>

        <div className='block'>
          <label htmlFor='job-description'>Job Description</label>
          <textarea rows={8} className=' input-form mt-2' value={jobDescription} onChange={(e) => setJobDescription(e?.target?.value)}></textarea>
        </div>
        <div className=''>

          <button className='p-2 rounded-md bg-purple-primary text-white mt-4' onClick={(e) => {
            e.stopPropagation()
            calculateScore()
          }}>
            Calculate Score
          </button>

        </div>

      </div>
    )
  }

  return (
    <div className='relative'>

      {openModal && (<Modal children={<ModalChildren />} onClick={() => {

        setOpenModal(false)
      }} />)}

      <div className='grid grid-cols-2 gap-0'>
        <div>
          <div className='flex justify-center items-start px-4 py-6 border-r-2  h-screen overflow-y-auto'>

            <div className={tab === TABS.LATEX ? 'w-full shadow-md p-6 pb-16 rounded-xl h-full' : 'w-full shadow-md p-6 pb-16 rounded-xl bg-white'}>
              {form_sections[tab]}
            </div>

          </div>
        </div>

        <div className='px-4 py-4 max-h-screen overflow-y-auto'>
          {/* {atsScore && (
            <div className='flex justify-center '>

              <h1>{atsScore?.resume_score}</h1>

            </div>
          )} */}

        


          <div className='flex justify-between my-2'>

            <button className='flex justify-center items-center gap-2 py-2 px-4 rounded-md bg-black text-white' onClick={handlePrint}>
              <h1>Download / Print</h1>
              <MdOutlineFileDownload className='text-xl' />
            </button>

          </div>


          <div className='absolute bottom-5 right-8 z-20 '>

            <AIDock setATSModalOpen={setOpenModal} genSuggestions={genSuggestions} />

          </div>

          <div className='flex justify-center '>
            {
              latexCode !== null ? <LatexResumeShowCase latexCode={latexCode} /> : <ResumeShowCase template_name={"default"} basicDetails={basicDetails} WorkDetails={WorkDetails} educationDetails={educationDetails} projectDetails={projectDetails} skillsDetails={skillsDetails} suggestions={suggestions} ref={componentRef} />
            }
          </div>
        </div>

      </div>




    </div>
  )
}

export default BuilderForm
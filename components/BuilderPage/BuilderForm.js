import React, { useState, useRef, useEffect, useCallback } from 'react'
import BasicInfo from './FormSections/BasicInfo'
import ResumeShowCase from './ResumeShowCase';
import WorkExperienceInfo from './FormSections/WorkExperienceInfo';
import EducationInfo from './FormSections/EducationInfo';
import ProjectsInfo from './FormSections/ProjectsInfo';
import OtherInfo from './FormSections/OtherInfo';
import { IoClose } from "react-icons/io5";
import Modal from '../Modal';
import axios from 'axios';
import LatexEditor from './FormSections/LatexEditor';
import { COLORS, FONTS, TABS } from '@/constants';
import LatexResumeShowCase from './LatexResumeShowCase';
import AIDock from './AIDock';
import Skills from './FormSections/Skills';
import { MdOutlineFileDownload } from "react-icons/md";
import { useReactToPrint } from 'react-to-print'
import { toast } from 'sonner';
import { FaPaintbrush } from "react-icons/fa6";
import { RxCross1, RxFontFamily } from "react-icons/rx";
import { FaEye } from "react-icons/fa";
import { useAuth } from '@clerk/nextjs';
import { RiLoader2Fill } from 'react-icons/ri';
import { IoIosSave } from 'react-icons/io';
import { debounce, isString } from 'lodash';
import { removeID } from '@/utils/helpers';
import { LuCross } from 'react-icons/lu';
function BuilderForm({ tab, isLoading, setIsLoading, resumeData }) {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { isLoaded, getToken, isSignedIn, sessionId } = useAuth()
  const [basicDetails, setBasicDetails] = useState(resumeData && resumeData?.basic_details ? resumeData?.basic_details : {
    name: "John Doe",
    title: "Frontend Developer",
    linkedin_link: "https://www.linkedin.com/",
    github_link: "https://github.com/",
    other: "",
    email: "abc@gmail.com",
    phone: "+111234567890",
  })
  const [resumeDataID, setResumeDateID] = useState(resumeData && resumeData?.id ? resumeData?.id : null)
  const [WorkDetails, setWorkDetails] = useState(resumeData && resumeData?.work_details.length > 0 ? resumeData?.work_details : [])
  const [educationDetails, setEducationDetails] = useState(resumeData && resumeData?.education_details.length > 0 ? resumeData?.education_details : [])
  const [projectDetails, setProjectDetails] = useState(resumeData && resumeData?.project_details.length > 0 ? resumeData?.project_details : [])
  const [skillsDetails, setSkillsDetails] = useState(resumeData && resumeData?.skills_details.length > 0 ? resumeData?.skills_details : [])
  const [otherDetails, setOtherDetails] = useState(resumeData && resumeData?.other_details.length > 0 ? resumeData?.other_details : [])
  const [openModal, setOpenModal] = useState(false);
  const [jobDescription, setJobDescription] = useState("")
  const [atsScore, setAtsScore] = useState(null)
  const [latexCode, setLatexCode] = useState(null)
  const [suggestions, setSuggestions] = useState({
    experience: "",
    project: "",
    skills: "",
  })
  const [openToolBar, setOpenToolBar] = useState(false)
  const isInitialRender = useRef(true);
  const [color, setColor] = useState("indigo-600")
  const [font, setFont] = useState("roboto")
  const [preview, setPreview] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const form_sections = {
    BASIC_INFO: <BasicInfo basicDetails={basicDetails} setBasicDetails={setBasicDetails} />,
    WORK_EXPERIENCE: <WorkExperienceInfo WorkDetails={WorkDetails} setWorkDetails={setWorkDetails} />,
    EDUCATION: <EducationInfo educationDetails={educationDetails} setEducationDetails={setEducationDetails} />,
    PROJECTS: <ProjectsInfo projectDetails={projectDetails} setProjectDetails={setProjectDetails} />,
    OTHER: <OtherInfo otherDetails={otherDetails} setOtherDetails={setOtherDetails} />,
    SKILLS: <Skills skillsDetails={skillsDetails} setSkillsDetails={setSkillsDetails} />,
    LATEX: <><div className='text-xl'>Coming Soon...</div></>

    // <LatexEditor latexCode={latexCode} setLatexCode={setLatexCode} />
  }

  console.log({ skillsDetails });

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
    if (isLoading || jobDescription === "")
      return
    console.log(educationDetails);
    if (WorkDetails.length === 0 || educationDetails.length === 0 || projectDetails.length === 0 || skillsDetails.length === 0) {
      toast.error("Resume Incomplete")
      return
    }
    setIsLoading(true)

    axios.post("/api/gemini/ats", {
      resumeDescription: buildResumeDescription(),
      jobDescription: jobDescription
    }).then((res) => {
      console.log({ res });
      console.log((res?.data?.text))
      setAtsScore((res?.data?.text))
      setIsLoading(false)
      // setOpenModal(false)

    })

      .catch((e) => {
        console.log(e);
        setIsLoading(false)
      })
  }


  const genSuggestions = () => {
    if (isLoading)
      return
    setIsLoading(true)
    axios.post("/api/gemini/suggestions", {
      resumeDescription: buildResumeDescription(),
      title: basicDetails?.title
    }).then((res) => {
      console.log({ res });
      console.log((res?.data?.text))

      setSuggestions({
        experience: res?.data?.text?.experience ? res?.data?.text?.experience : "",
        project: res?.data?.text?.project ? res?.data?.text?.project : "",
        skills: res?.data?.text?.skills ? res?.data?.text?.skills : "",
      })
      setIsLoading(false)

    })
      .catch((e) => {
        console.log(e);
        setIsLoading(false)
      })
  }



  const handleSave = async (basicDetails, WorkDetails, educationDetails, projectDetails, skillsDetails, otherDetails) => {
    console.log("hello");
    if (isSaving)
      return
    const token = await getToken();
    if (!token) {
      return;
    }
    setIsSaving(true)
    console.log("save : ", { basicDetails });
    try {
      let resume_data_body = {
        resume_id: 1,
        basic_details: basicDetails,
        work_details: WorkDetails.length == 0 ? [] : WorkDetails,
        education_details: educationDetails.length == 0 ? [] : educationDetails,
        skills_details: skillsDetails,
        project_details: projectDetails.length == 0 ? [] : projectDetails,
        other_details: otherDetails
      }
      let promise = axios.post(`${resumeData ? `/api/resumedata/post_resume_data?id=${resumeData ? resumeData?.id : null}` : `/api/resumedata/post_resume_data`}`, { resumeData: removeID(resume_data_body) }, { headers: { "Authorization": `Bearer ${token}` }, });

      toast.promise(promise, {
        loading: 'Saving...',
        success: (data) => {
          return `Saved `;
        },
        error: 'Error',
      });
      const res = await promise;
      setIsSaving(false)
    } catch (e) {
      console.log(e);
    }
  }

  const saveData = useCallback(
    debounce(async (basicDetails, WorkDetails, educationDetails, projectDetails, skillsDetails, otherDetails) => {
      console.log({ basicDetails });
      await handleSave(basicDetails, WorkDetails, educationDetails, projectDetails, skillsDetails, otherDetails)
    }, 2000), // 500ms debounce
    []
  );

  useEffect(() => {

    if (isInitialRender.current) {
      isInitialRender.current = false;
      return; // Do nothing on initial render
    }
    saveData(basicDetails, WorkDetails, educationDetails, projectDetails, skillsDetails, otherDetails)
  }, [saveData, basicDetails, WorkDetails, educationDetails, projectDetails, skillsDetails, otherDetails])

  return (
    <div className='relative'>

      {openModal && (<Modal onClick={() => {

        setOpenModal(false)
      }} >

        <div className='rounded-md p-8 pt-6 w-[50%] bg-white' onClick={(e) => e.stopPropagation()}>
          <div className='flex justify-end'>
            <button className='text-black text-2xl' onClick={() => setOpenModal(false)}><IoClose /></button>
          </div>

          {atsScore && (
            <>
              <div className='flex justify-center'>
                <div className='bg-black text-white rounded-full p-2 text-2xl my-2'>

                  {atsScore?.resume_score}%

                </div>
              </div>
            </>
          )}
          <div className='block'>
            <label htmlFor='job-description'>Job Description</label>
            <textarea rows={8} className=' input-form mt-2' value={jobDescription} onChange={(e) => setJobDescription(e?.target?.value)}></textarea>
          </div>
          <div className=''>

            <button disabled={!jobDescription} className='add-btn mt-3 disabled:opacity-60 disabled:hover:scale-100' onClick={(e) => {

              e.stopPropagation()
              calculateScore()
            }}>
              Calculate Score
            </button>

          </div>

        </div>
      </Modal>)}
      <button className='absolute block md:hidden top-4 right-4 rounded-full p-2 bg-black text-white' onClick={() => setPreview(!preview)}>
        <FaEye />
      </button>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>


        <div className={preview ? `hidden md:block` : `block md:block`}>
          <div className='flex justify-center items-start px-4 py-6 border-r-2  h-screen overflow-y-auto'>

            <div className={tab === TABS.LATEX ? 'w-full shadow-md p-6 pb-16 rounded-xl h-full' : 'w-full shadow-md p-6 pb-12 rounded-xl bg-white'}>
              {form_sections[tab]}
            </div>

          </div>
        </div>

        <div className={preview ? `block md:block` : `hidden md:block`}>

          <div className='px-4 py-12 md:py-4 max-h-screen overflow-y-auto '>

            <div className='flex justify-between my-2 items-center relative'>

              <div className='flex  gap-2'>
                <button className='flex justify-center items-center gap-2 add-btn' onClick={handlePrint}>
                  <h1>Download / Print</h1>
                  <MdOutlineFileDownload className='text-xl' />
                </button>
                <button className='add-btn flex gap-2 justify-center items-center disabled:opacity-40' disabled={isSaving} onClick={() => {
                  handleSave(basicDetails, WorkDetails, educationDetails, projectDetails, skillsDetails, otherDetails)

                }}>
                  Save
                  {
                    isSaving ? (<RiLoader2Fill className='text-xl animate-spin' />) : (
                      <IoIosSave className='text-xl' />
                    )
                  }
                </button>

              </div>

              <button className='p-2 rounded-full text-white bg-black text-lg hover:scale-105' onClick={() => setOpenToolBar(!openToolBar)}>

                <FaPaintbrush />

              </button>

              {
                openToolBar && (
                  <div className='absolute bg-white z-20 top-12 right-0 w-[200px] rounded-xl p-3 shadow-lg' >

                    <div className='grid grid-cols-4 gap-2 my-2 mb-4'>
                      {
                        COLORS?.map((item, key) => {
                          return (
                            <>
                              <div key={key} style={{
                                backgroundColor: item
                              }} className={` rounded-full h-[1.5rem] w-full cursor-pointer ${color === item && " scale-125"} `} onClick={() => {
                                setColor(item)
                              }} >

                              </div>
                            </>
                          )
                        })
                      }


                    </div>
                    {FONTS?.map((item, key) => {
                      return (
                        <>
                          <div className={`w-full flex justify-start rounded-lg p-0 border-2 my-2 cursor-pointer group hover:border-gray-400 ${item === font && "border-gray-400"}`} key={key} onClick={() => {
                            setFont(item)
                          }}>

                            <div className='border-r-2 p-1 text-sm group-hover:border-gray-400'>
                              <RxFontFamily />
                            </div>
                            <div className='text-xs p-1 flex justify-center'>
                              <p className={`${item} text-center`}>{item}</p>
                            </div>

                          </div>
                        </>
                      )
                    })}





                  </div>
                )
              }


            </div>


            <div className='absolute bottom-5 right-8 z-20 '>

              <AIDock setATSModalOpen={setOpenModal} genSuggestions={genSuggestions} isLoading={isLoading} setIsLoading={setIsLoading} />

            </div>

            <div className='flex justify-center relative'>
              {
                suggestions&& (
                  <div className='absolute top-2 right-2 z-10 p-1 rounded-lg'>
                    <button onClick={() => {
                      setSuggestions(null)
                    }}>
                      <RxCross1 className='text-xl text-yellow-500' />
                    </button>

                  </div>
                )
              }
              {
                latexCode !== null ? <LatexResumeShowCase latexCode={latexCode} /> : (
                  <div className='w-full' ref={componentRef}>

                    <ResumeShowCase template_name={"default"} basicDetails={basicDetails} WorkDetails={WorkDetails} educationDetails={educationDetails} projectDetails={projectDetails} skillsDetails={skillsDetails} otherDetails={otherDetails} suggestions={suggestions} font={font} color={color} />
                  </div>
                )
              }
            </div>
          </div>
        </div>

      </div>




    </div>
  )
}

export default BuilderForm
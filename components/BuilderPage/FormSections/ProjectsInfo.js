import React, { useState } from 'react'
import { SiGooglegemini } from "react-icons/si";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from 'axios';
import Spils from '../Spils';
function ProjectsInfo({ projectDetails, setProjectDetails }) {
    const [loading, setLoading] = useState(false)
    const [geminiText, setGeminiText] = useState("")
    const [singleProjectDetails, setSingleProjectDetails] = useState({
        name: "",
        description: "",
        tech_stack: "",
        start_date: "",
        end_date: "",
        link: ""
    })

    const handleGemini = () => {
        if (loading || singleProjectDetails?.description === "")
            return
        setLoading(true)

        try {
            axios.post("/api/gemini/description", {
                promptDescription: singleProjectDetails.description
            }).then((res) => {
                console.log({ res });
                setLoading(false)
                setGeminiText(res?.data?.text)
                console.log({ res });
                setSingleProjectDetails({
                    ...singleProjectDetails,
                    description: res?.data?.text
                })

            }).catch((e) => {
                console.log(e)
                setLoading(false)
            })
        } catch (e) {
            console.log(e);
            setLoading(false)
        }
    }
    const handleDelete = (id) => {
        let filtered = projectDetails.filter((item) => item?.id !== id)
        setProjectDetails([...filtered])
    }
    return (
        <div className='w-full'>
            <div className='flex flex-wrap justify-start items-center gap-2 mb-5'>
                {projectDetails?.map((item, key) => {
                    return (
                        <>
                            <Spils text={item?.name} onClick={handleDelete} id={item?.id} />
                        </>
                    )
                })}
            </div>

            <div className='mb-2'>
                <label htmlFor='name' className="block">Project Name</label>
                <input className=' input-form ' id="name" name='name' placeholder='Ecommerce' value={singleProjectDetails?.name} onChange={(e) => setSingleProjectDetails({
                    ...singleProjectDetails,
                    name: e.target.value
                })} />
            </div>

            <div className='mb-2'>
                <label htmlFor='tech_stack' className="block">Tech Stack</label>
                <input className=' input-form ' id="tech_stack" name='tech_stack' placeholder='ExpressJS, ReactJS' value={singleProjectDetails?.tech_stack} onChange={(e) => setSingleProjectDetails({
                    ...singleProjectDetails,
                    tech_stack: e.target.value
                })} />
            </div>
            <div className='mb-2'>
                <label htmlFor='link' className="block">Link</label>
                <input className=' input-form ' id="link" name='link' placeholder='https://' value={singleProjectDetails?.link} onChange={(e) => setSingleProjectDetails({
                    ...singleProjectDetails,
                    link: e.target.value
                })} />
            </div>
            <div className='mb-2'>
                <label htmlFor='start_date' className="block">Start Date</label>
                <input className=' input-form ' id="start_date" name='start_date' type='date' placeholder='20/01/2020' value={singleProjectDetails?.start_date} onChange={(e) => setSingleProjectDetails({
                    ...singleProjectDetails,
                    start_date: e.target.value
                })} />
            </div>
            <div className='mb-2'>
                <label htmlFor='end_date' className="block">End Date</label>
                <input className=' input-form ' id="end_date" name='end_date' type='date' placeholder='20/01/2020' value={singleProjectDetails?.end_date} onChange={(e) => setSingleProjectDetails({
                    ...singleProjectDetails,
                    end_date: e.target.value
                })} />
            </div>

            <div className='mb-2 relative'>
                <button disabled={loading} className='text-white p-1 rounded-full bg-purple-secondary absolute right-4 top-10 border-2 border-purple-600  animate-pulse disabled:animate-spin disabled:bg-purple-500 hover:bg-purple-600 hover:pause hover:opacity-100' onClick={() => handleGemini()}>{
                    !loading ? <SiGooglegemini /> : <AiOutlineLoading3Quarters />
                }</button>
                <label htmlFor='description' className="block">Description</label>
                <textarea rows={8} className=' input-form ' id="description" name='description' placeholder='20/01/2020' value={singleProjectDetails?.description} onChange={(e) => setSingleProjectDetails({
                    ...singleProjectDetails,
                    description: e.target.value
                })} >

                </textarea>
            </div>

            <div>
                <button className='p-2 rounded-md bg-blue-400 text-white text-md' onClick={() => {
                    setProjectDetails([...projectDetails, {
                        ...singleProjectDetails,
                        id: projectDetails?.length
                    }])
                    setSingleProjectDetails({
                        name: "",
                        description: "",
                        tech_stack: "",
                        start_date: "",
                        end_date: "",
                        link: ""
                    })
                }}>
                    Add
                </button>
            </div>

        </div>
    )
}

export default ProjectsInfo
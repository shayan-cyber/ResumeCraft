import React, { useState } from 'react'
import { SiGooglegemini } from "react-icons/si";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from 'axios';
import Spils from '../Spils';
import { LuBrain } from "react-icons/lu";
import AIResponseCard from '../AIResponseCard';
import RichTextEditor from '../RichTextEditor';
import { toast } from 'sonner';
function ProjectsInfo({ projectDetails, setProjectDetails }) {
    const [loading, setLoading] = useState(false)
    const [geminiResponses, setGeminiResponses] = useState("")
    const [editID, setEditID] = useState(null)
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
                setGeminiResponses(res?.data?.text)


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

    const handleEditClick = (id) => {
        console.log({ id });
        let filtered = projectDetails.filter((item) => item?.id === id)
        console.log({ filtered });
        setSingleProjectDetails(filtered[0])
        setEditID(id)
    }

    const handleEdit = () => {

        const filtered = projectDetails.map((item) => {
            if (item?.id === editID) {
                return {
                    ...singleProjectDetails,
                    id: editID
                }
            } else {
                return item;
            }
        })
        setProjectDetails([...filtered]);

        setSingleProjectDetails({
            name: "",
            description: "",
            tech_stack: "",
            start_date: "",
            end_date: "",
            link: ""
        })
        setGeminiResponses([])
        setEditID(null)
    }
    const setSelectResponse = (description) => {
        setSingleProjectDetails({
            ...singleProjectDetails,
            description: description
        })
    }
    const setContent = (data) => {
        setSingleProjectDetails({
            ...singleProjectDetails,
            description: data
        })
    }

    return (
        <div className='w-full pt-2'>
            <h1 className='text-xl font-[550]'>Project Details</h1>
            <div className='flex flex-wrap justify-start items-center gap-2 mb-5 mt-2'>
                {projectDetails?.map((item, key) => {
                    return (
                        <>
                            <Spils text={item?.name} onDelete={handleDelete} onEdit={handleEditClick} id={item?.id} />
                        </>
                    )
                })}
            </div>

            <div className='mb-2 grid grid-cols-2 gap-2'>

                <div>
                    <label htmlFor='name' className="block">Project Name</label>
                    <input className=' input-form ' id="name" name='name' placeholder='Ecommerce' value={singleProjectDetails?.name} onChange={(e) => setSingleProjectDetails({
                        ...singleProjectDetails,
                        name: e.target.value
                    })} />
                </div>
                <div>
                    <label htmlFor='tech_stack' className="block">Tech Stack</label>
                    <input className=' input-form ' id="tech_stack" name='tech_stack' placeholder='ExpressJS, ReactJS' value={singleProjectDetails?.tech_stack} onChange={(e) => setSingleProjectDetails({
                        ...singleProjectDetails,
                        tech_stack: e.target.value
                    })} />
                </div>

            </div>


            <div className='mb-2 grid grid-cols-4 gap-2'>
                <div className='col-span-2'>
                    <label htmlFor='link' className="block">Link</label>
                    <input className=' input-form ' id="link" name='link' placeholder='https://' value={singleProjectDetails?.link} onChange={(e) => setSingleProjectDetails({
                        ...singleProjectDetails,
                        link: e.target.value
                    })} />

                </div>
                <div>
                    <label htmlFor='start_date' className="block">Start Date</label>
                    <input className=' input-form ' id="start_date" name='start_date' type='date' placeholder='20/01/2020' value={singleProjectDetails?.start_date} onChange={(e) => setSingleProjectDetails({
                        ...singleProjectDetails,
                        start_date: e.target.value
                    })} />
                </div>
                <div>
                    <label htmlFor='end_date' className="block">End Date</label>
                    <input className=' input-form ' id="end_date" name='end_date' type='date' placeholder='20/01/2020' value={singleProjectDetails?.end_date} onChange={(e) => setSingleProjectDetails({
                        ...singleProjectDetails,
                        end_date: e.target.value
                    })} />
                </div>

            </div>


            <div className='mb-4 relative mt-4'>
                <div className='flex justify-between items-end mb-2'>
                    <label htmlFor='description' className="block">Description</label>

                    {singleProjectDetails?.description !== "" && (

                        <button disabled={loading} className='text-purple-600 py-[1px] px-8 rounded-full border-2 border-purple-500  hover:bg-purple-500 hover:text-white disabled:opacity-100 disabled:cursor-wait disabled:hover:bg-white disabled:hover:text-purple-500   hover:opacity-100 bg-white flex  items-center' onClick={() => handleGemini()}>


                            <span className='mb-[2px]'> Use AI </span> {
                                !loading ? <LuBrain className='ml-1 ' /> : <AiOutlineLoading3Quarters className='ml-1 animate-spin' />
                            }
                        </button>
                    )}

                </div>
                {geminiResponses && (
                    <div className='grid grid-cols-1 gap-2 mb-2 mt-2'>

                        {geminiResponses?.map((item, key) => <AIResponseCard key={key} description={item} setSelectResponse={setSelectResponse} />)}

                    </div>
                )}

                {/* <textarea rows={8} className=' input-form ' id="description" name='description' placeholder='20/01/2020' value={singleProjectDetails?.description} onChange={(e) => setSingleProjectDetails({
                    ...singleProjectDetails,
                    description: e.target.value
                })} >

                </textarea> */}
                <RichTextEditor content={singleProjectDetails} setContent={setContent} />
            </div>

            <div>
                {editID !== null ? (
                    <button className='add-btn' onClick={() => {
                        if (singleProjectDetails?.name === "" || singleProjectDetails?.description === "") {

                            toast.error("Incomplete details")
                            return
                        }
                        handleEdit()
                    }}>
                        Edit
                    </button>

                ) : (

                    <button className='add-btn' onClick={() => {
                        if (singleProjectDetails?.name === "" || singleProjectDetails?.description === "" || singleProjectDetails?.tech_stack === "") {

                            toast.error("Incomplete details")
                            return
                        }
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
                        setGeminiResponses([])
                    }}>
                        Add
                    </button>
                )}
            </div>

        </div>
    )
}

export default ProjectsInfo
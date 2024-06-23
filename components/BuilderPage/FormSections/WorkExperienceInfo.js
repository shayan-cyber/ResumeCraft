import React, { useState } from 'react'
import Spils from '../Spils'
import { SiGooglegemini } from "react-icons/si";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from 'axios';

function WorkExperienceInfo({ WorkDetails, setWorkDetails }) {
  const [loading, setLoading] = useState(false)
  const [geminiText, setGeminiText] = useState("")
  const [singleworkDetails, setSingleWorkDetails] = useState({
    title: "",
    company_name: "",
    location: "",
    start_date: "",
    end_date: "",
    description: ""
  })


  const handleDelete = (id) => {
    let filtered = WorkDetails.filter((item) => item?.id !== id)
    setWorkDetails([...filtered])
  }

  const handleGemini = () => {
    if (loading || singleworkDetails?.description === "")
      return
    setLoading(true)

    try {
      axios.post("/api/gemini/description", {
        promptDescription: singleworkDetails.description
      }).then((res) => {
        console.log({ res });
        setLoading(false)
        setGeminiText(res?.data?.text)
        console.log({ res });
        setSingleWorkDetails({
          ...singleworkDetails,
          description: res?.data?.text
        })

      }).catch((e) => {
        console.log(e)
        setLoading(false)
      })
    } catch {
      console.log(e);
      setLoading(false)
    }
  }
  return (
    <div className='w-full'>

      <div className='flex flex-wrap justify-start items-center gap-2 mb-5'>
        {WorkDetails?.map((item, key) => {
          return (
            <>
              <Spils text={item?.title} onClick={handleDelete} id={item?.id} />
            </>
          )
        })}
      </div>

      <div className='mb-2'>
        <label htmlFor='title' className="block">Title</label>
        <input className=' input-form ' id="title" name='title' placeholder='SWE' value={singleworkDetails?.title} onChange={(e) => setSingleWorkDetails({
          ...singleworkDetails,
          title: e.target.value
        })} />
      </div>

      <div className='mb-2'>
        <label htmlFor='company_name' className="block">Company Name</label>
        <input className=' input-form ' id="company_name" name='company_name' placeholder='Amazon' value={singleworkDetails?.company_name} onChange={(e) => setSingleWorkDetails({
          ...singleworkDetails,
          company_name: e.target.value
        })} />
      </div>
      <div className='mb-2'>
        <label htmlFor='location' className="block">Location</label>
        <input className=' input-form ' id="location" name='location' placeholder='Remote' value={singleworkDetails?.location} onChange={(e) => setSingleWorkDetails({
          ...singleworkDetails,
          location: e.target.value
        })} />
      </div>
      <div className='mb-2'>
        <label htmlFor='start_date' className="block">Start Date</label>
        <input className=' input-form ' id="start_date" name='start_date' type='date' placeholder='20/01/2020' value={singleworkDetails?.start_date} onChange={(e) => setSingleWorkDetails({
          ...singleworkDetails,
          start_date: e.target.value
        })} />
      </div>
      <div className='mb-2'>
        <label htmlFor='end_date' className="block">End Date</label>
        <input className=' input-form ' id="end_date" name='end_date' type='date' placeholder='20/01/2020' value={singleworkDetails?.end_date} onChange={(e) => setSingleWorkDetails({
          ...singleworkDetails,
          end_date: e.target.value
        })} />
      </div>

      <div className='mb-2 relative'>
        <label htmlFor='description' className="block">Job Description</label>
        <button disabled={loading} className='text-white p-1 rounded-full bg-purple-secondary absolute right-4 top-10 border-2 border-purple-600  animate-pulse disabled:animate-spin disabled:bg-purple-500 hover:bg-purple-600 hover:pause hover:opacity-100' onClick={() => handleGemini()}>{
          !loading ? <SiGooglegemini /> : <AiOutlineLoading3Quarters />
        }</button>

        <textarea className=' input-form ' id="description" name='description' placeholder='I worked on customer support team using django spring reactjs' rows={5} value={singleworkDetails?.description} onChange={(e) => setSingleWorkDetails({
          ...singleworkDetails,
          description: e.target.value
        })} >

        </textarea>
      </div>

      <div>
        <button className='p-2 rounded-md bg-blue-400 text-white text-md' onClick={() => {
          setWorkDetails([...WorkDetails, {
            ...singleworkDetails,
            id: WorkDetails?.length
          }])
          setSingleWorkDetails({
            title: "",
            company_name: "",
            location: "",
            start_date: "",
            end_date: "",
            description: ""
          })
        }}>
          Add
        </button>
      </div>

    </div>
  )
}

export default WorkExperienceInfo
import React, { useState } from 'react'
import Spils from '../Spils'
import { SiGooglegemini } from "react-icons/si";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from 'axios';
import AIResponseCard from '../AIResponseCard';
import { LuBrain } from "react-icons/lu";
import RichTextEditor from '../RichTextEditor';
import { toast } from 'sonner';
function WorkExperienceInfo({ WorkDetails, setWorkDetails }) {
  const [loading, setLoading] = useState(false)
  const [editID, setEditID] = useState(null)
  const [geminiResponses, setGeminiResponses] = useState([])
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

  const handleEditClick = (id) => {
    console.log({ id });
    let filtered = WorkDetails.filter((item) => item?.id === id)
    console.log({ filtered });
    setSingleWorkDetails(filtered[0])
    setEditID(id)
  }

  const handleEdit = () =>{

    const filtered = WorkDetails.map((item) =>{
      if(item?.id === editID){
        return {
          ...singleworkDetails,
          id:editID
        }
      }else{
        return item;
      }
    })
    setWorkDetails([...filtered]);

    setSingleWorkDetails({
      title: "",
      company_name: "",
      location: "",
      start_date: "",
      end_date: "",
      description: ""
    })
    setGeminiResponses([])
    setEditID(null)
  }
  console.log("Edit: ", WorkDetails);
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
        setGeminiResponses(res?.data?.text)
        console.log({ res });

      }).catch((e) => {
        console.log(e)
        setLoading(false)
      })
    } catch {
      console.log(e);
      setLoading(false)
    }
  }

  const setSelectResponse = (description) => {
    let details = { ...singleworkDetails, description: description }
    setSingleWorkDetails(details)
  }

  const setContent = (data) => {
    setSingleWorkDetails({
      ...singleworkDetails,
      description: data
    })
  }
  console.log({ singleworkDetails });
  console.log({ WorkDetails })
  return (
    <div className='w-full pt-2'>

      <h1 className='text-xl font-[550]'>Work Details</h1>

      <div className='flex flex-wrap justify-start items-center gap-2 mb-5 mt-2'>
        {WorkDetails?.map((item, key) => {
          return (
            <>
              <Spils text={item?.title} onDelete={handleDelete} onEdit={handleEditClick} id={item?.id} />
            </>
          )
        })}
      </div>

      <div className='mb-2 grid grid-cols-2 gap-2'>
        <div>

          <label htmlFor='title' className="block">Title</label>
          <input className=' input-form ' id="title" name='title' placeholder='SWE' value={singleworkDetails?.title} onChange={(e) => setSingleWorkDetails({
            ...singleworkDetails,
            title: e.target.value
          })} />
        </div>
        <div>
          <label htmlFor='company_name' className="block">Company Name</label>
          <input className=' input-form ' id="company_name" name='company_name' placeholder='Amazon' value={singleworkDetails?.company_name} onChange={(e) => setSingleWorkDetails({
            ...singleworkDetails,
            company_name: e.target.value
          })} />
        </div>
      </div>


      <div className='mb-4 grid grid-cols-4 gap-2'>
        <div className="col-span-2">
          <label htmlFor='location' className="block">Location</label>
          <input className=' input-form ' id="location" name='location' placeholder='Remote' value={singleworkDetails?.location} onChange={(e) => setSingleWorkDetails({
            ...singleworkDetails,
            location: e.target.value
          })} />
        </div>
        <div className=''>
          <label htmlFor='start_date' className="block">Start Date</label>
          <input className=' input-form ' id="start_date" name='start_date' type='date' placeholder='20/01/2020' value={singleworkDetails?.start_date} onChange={(e) => setSingleWorkDetails({
            ...singleworkDetails,
            start_date: e.target.value
          })} />
        </div>
        <div>
          <label htmlFor='end_date' className="block">End Date</label>
          <input className=' input-form ' id="end_date" name='end_date' type='date' placeholder='20/01/2020' value={singleworkDetails?.end_date} onChange={(e) => setSingleWorkDetails({
            ...singleworkDetails,
            end_date: e.target.value
          })} />
        </div>
      </div>


      <div className='mb-2 relative mb-4'>

        <div className='flex justify-between items-end mb-0'>

          <label htmlFor='description' className="block">Job Description</label>
          {singleworkDetails?.description !== "" && (

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

        {/* <textarea className=' input-form ' id="description" name='description' placeholder='I worked on customer support team using django spring reactjs' rows={5} value={singleworkDetails?.description} onChange={(e) => } >

        </textarea> */}
        <RichTextEditor content={singleworkDetails} setContent={setContent} />
      </div>

      <div>
        {
          editID !== null ? (
            <button className='add-btn' onClick={() => {

              if (singleworkDetails?.title === "" || singleworkDetails?.company_name === "" || singleworkDetails?.location === "" || singleworkDetails?.description === "") {

                toast.error("Incomplete details")
                return
              }
              handleEdit()
              
            }}>
              Edit
            </button>
          ) : (

            <button className='add-btn' onClick={() => {

              if (singleworkDetails?.title === "" || singleworkDetails?.company_name === "" || singleworkDetails?.location === "" || singleworkDetails?.description === "") {

                toast.error("Incomplete details")
                return
              }
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
              setGeminiResponses([])
            }}>
              Add
            </button>
          )
        }
      </div>

    </div>
  )
}

export default WorkExperienceInfo
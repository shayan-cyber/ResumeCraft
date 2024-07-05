import React, { useState } from 'react'
import Spils from '../Spils'
import { toast } from 'sonner'
function EducationInfo({ educationDetails, setEducationDetails }) {
  const [singleEducationDetails, setSingleEducationDetails] = useState({
    name: "",
    level: "",
    area_of_study: "",
    start_date: "",
    end_date: "",
    result: ""
  })
  const [editID, setEditID] = useState(null)

  const handleEditClick = (id) => {
    console.log({ id });
    let filtered = educationDetails.filter((item) => item?.id === id)
    console.log({ filtered });
    setSingleEducationDetails(filtered[0])
    setEditID(id)
  }

  const handleEdit = () => {

    const filtered = educationDetails.map((item) => {
      if (item?.id === editID) {
        return {
          ...singleEducationDetails,
          id: editID
        }
      } else {
        return item;
      }
    })
    setEducationDetails([...filtered]);

    setSingleEducationDetails({
      name: "",
      level: "",
      area_of_study: "",
      start_date: "",
      end_date: "",
      result: ""
    })
    // setGeminiResponses([])
    setEditID(null)
  }

  const handleDelete = (id) => {
    let filtered = educationDetails.filter((item) => item?.id !== id)
    setEducationDetails([...filtered])
  }
  return (
    <div className='w-full pt-2'>
      <h1 className='text-xl font-[550]'>Education Details</h1>
      <div className='flex flex-wrap justify-start items-center gap-2 mb-5 mt-2'>
        {educationDetails?.map((item, key) => {
          return (
            <>
              <Spils key={key} text={item?.name} onDelete={handleDelete} onEdit={handleEditClick} id={item?.id} />
            </>
          )
        })}
      </div>
      <div className='mb-2'>
        <label htmlFor='name' className="block">Institute Name</label>
        <input className=' input-form ' id="name" name='name' placeholder='IIT' value={singleEducationDetails?.name} onChange={(e) => setSingleEducationDetails({
          ...singleEducationDetails,
          name: e.target.value
        })} />
      </div>

      <div className='mb-2'>
        <label htmlFor='level' className="block">Education Level</label>
        <input className=' input-form ' id="level" name='level' placeholder='BTech' value={singleEducationDetails?.level} onChange={(e) => setSingleEducationDetails({
          ...singleEducationDetails,
          level: e.target.value
        })} />
      </div>
      <div className='mb-2'>
        <label htmlFor='area_of_study' className="block">Area of Study</label>
        <input className=' input-form ' id="area_of_study" name='area_of_study' placeholder='ECE' value={singleEducationDetails?.area_of_study} onChange={(e) => setSingleEducationDetails({
          ...singleEducationDetails,
          area_of_study: e.target.value
        })} />
      </div>
      <div className='mb-4 grid grid-cols-4 gap-2'>
        <div className='col-span-2'>
          <label htmlFor='result' className="block">Result</label>
          <input className=' input-form ' id="result" name='result' placeholder='CGPA' value={singleEducationDetails?.result} onChange={(e) => setSingleEducationDetails({
            ...singleEducationDetails,
            result: e.target.value
          })} />
        </div>
        <div className=''>
          <label htmlFor='start_date' className="block">Start Date</label>
          <input className=' input-form ' id="start_date" name='start_date' type='date' placeholder='20/01/2020' value={singleEducationDetails?.start_date} onChange={(e) => setSingleEducationDetails({
            ...singleEducationDetails,
            start_date: e.target.value
          })} />
        </div>

        <div>
          <label htmlFor='end_date' className="block">End Date</label>
          <input className=' input-form ' id="end_date" name='end_date' type='date' placeholder='20/01/2020' value={singleEducationDetails?.end_date} onChange={(e) => setSingleEducationDetails({
            ...singleEducationDetails,
            end_date: e.target.value
          })} />
        </div>
      </div>



      <div>
        {
          editID !== null ? (
            <button className='add-btn' onClick={() => {

              if (singleEducationDetails?.area_of_study === "" || singleEducationDetails?.name === "" || singleEducationDetails?.level === "" || singleEducationDetails?.result === "") {

                toast.error("Incomplete details")
                return
              }

              handleEdit()
            }}>
              Edit
            </button>
          ) : (


            <button className='add-btn' onClick={() => {

              if (singleEducationDetails?.area_of_study === "" || singleEducationDetails?.name === "" || singleEducationDetails?.level === "" || singleEducationDetails?.result === "") {

                toast.error("Incomplete details")
                return
              }

              setEducationDetails([...educationDetails, {
                ...singleEducationDetails,
                id: educationDetails?.length
              }])
              setSingleEducationDetails({
                name: "",
                level: "",
                area_of_study: "",
                start_date: "",
                end_date: "",
                result: ""
              })
            }}>
              Add
            </button>
          )
        }
      </div>

    </div>
  )
}

export default EducationInfo
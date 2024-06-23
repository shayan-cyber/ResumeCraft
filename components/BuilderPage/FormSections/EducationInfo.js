import React, { useState } from 'react'
import Spils from '../Spils'
function EducationInfo({ educationDetails, setEducationDetails }) {
  const [singleEducationDetails, setSingleEducationDetails] = useState({
    name: "",
    level: "",
    area_of_study: "",
    start_date: "",
    end_date: "",
    result: ""
  })

  const handleDelete = (id) => {
    let filtered = educationDetails.filter((item) => item?.id !== id)
    setEducationDetails([...filtered])
  }
  return (
    <div className='w-full'>
      <div className='flex flex-wrap justify-start items-center gap-2 mb-5'>
        {educationDetails?.map((item, key) => {
          return (
            <>
              <Spils text={item?.name} onClick={handleDelete} id={item?.id} />
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
      <div className='mb-2'>
        <label htmlFor='start_date' className="block">Start Date</label>
        <input className=' input-form ' id="start_date" name='start_date' type='date' placeholder='20/01/2020' value={singleEducationDetails?.start_date} onChange={(e) => setSingleEducationDetails({
          ...singleEducationDetails,
          start_date: e.target.value
        })} />
      </div>
      <div className='mb-2'>
        <label htmlFor='end_date' className="block">End Date</label>
        <input className=' input-form ' id="end_date" name='end_date' type='date' placeholder='20/01/2020' value={singleEducationDetails?.end_date} onChange={(e) => setSingleEducationDetails({
          ...singleEducationDetails,
          end_date: e.target.value
        })} />
      </div>

      <div className='mb-2'>
        <label htmlFor='result' className="block">Result</label>
        <input className=' input-form ' id="result" name='result' placeholder='CGPA' value={singleEducationDetails?.result} onChange={(e) => setSingleEducationDetails({
          ...singleEducationDetails,
          result: e.target.value
        })} />
      </div>

      <div>
        <button className='p-2 rounded-md bg-blue-400 text-white text-md' onClick={() => {
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
      </div>

    </div>
  )
}

export default EducationInfo
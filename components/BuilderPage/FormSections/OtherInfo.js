import React, { useState } from 'react'
import Spils from '../Spils'
function OtherInfo({ otherDetails, setOtherDetails }) {
  const [singleOtherDetails, setSingleOtherDetails] = useState({
    description: ""
  })
  const handleDelete = (id) => {
    let filtered = otherDetails.filter((item) => item?.id !== id)
    setOtherDetails([...filtered])
}
  return (
    <div className='w-full'>
      <div className='flex flex-wrap justify-start items-center gap-2 mb-5'>
        {otherDetails?.map((item, key) => {
          return (
            <>
              <Spils text={key+1} onClick={handleDelete} id={item?.id} />
            </>
          )
        })}
      </div>
      <div className='mb-2'>
        <label htmlFor='description' className="block"> Description</label>
        <textarea className=' input-form ' id="description" name='description' placeholder='Achievement' value={singleOtherDetails?.description} onChange={(e) => setSingleOtherDetails({
          ...singleOtherDetails,
          description: e.target.value
        })} >

        </textarea>
      </div>

      <div>
        <button className='p-2 rounded-md bg-blue-400 text-white text-md' onClick={() => {
          setOtherDetails([...otherDetails, {
            id:otherDetails?.length,
            ...singleOtherDetails
          }])

          setSingleOtherDetails({
            description: ""
          })


        }}>
          Add
        </button>
      </div>

    </div>
  )
}

export default OtherInfo
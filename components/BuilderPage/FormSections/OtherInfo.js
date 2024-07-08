import React, { useState } from 'react'
import Spils from '../Spils'
import { toast } from 'sonner'
function OtherInfo({ otherDetails, setOtherDetails }) {
  const [singleOtherDetails, setSingleOtherDetails] = useState({
    description: ""
  })
  const [editID, setEditID] = useState(null)
  const handleDelete = (id) => {
    let filtered = otherDetails.filter((item) => item?.id !== id)
    setOtherDetails([...filtered])
  }

  const handleEditClick = (id) => {
    console.log({ id });
    let filtered = otherDetails.filter((item) => item?.id === id)
    console.log({ filtered });
    setSingleOtherDetails(filtered[0])
    setEditID(id)
  }

  const handleEdit = () =>{

    const filtered = otherDetails.map((item) =>{
      if(item?.id === editID){
        return {
          ...singleOtherDetails,
          id:editID
        }
      }else{
        return item;
      }
    })
    setOtherDetails([...filtered]);

    setSingleOtherDetails({

      description: ""
    })
    // setGeminiResponses([])
    setEditID(null)
  }
  return (
    <div className='w-full'>

      <h1 className='text-xl font-[550]'>Other Details Details</h1>
      <div className='flex flex-wrap justify-start items-center gap-2 mb-5 mt-2'>
        {otherDetails?.map((item, key) => {
          return (
            <>
              <Spils text={item?.description?.slice(0,5) +"...."} onDelete={handleDelete} onEdit={handleEditClick} id={item?.id} />
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
        {
          editID !== null ? (
            <button className='add-btn' onClick={() => {
              if(singleOtherDetails?.description == "")
                return 
              handleEdit()
    
            }}>
              Edit
            </button>
          ):(
            <button className='add-btn' onClick={() => {
              if(singleOtherDetails?.description == "")
                {
                  toast.error("Add description!!")
                  return
                } 
              setOtherDetails([...otherDetails, {
                id: otherDetails?.length,
                ...singleOtherDetails
              }])
    
              setSingleOtherDetails({
                description: ""
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

export default OtherInfo
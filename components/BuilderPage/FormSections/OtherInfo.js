import React, {useState} from 'react'

function OtherInfo({otherDetails, setOtherDetails}) {
    const [singleOtherDetails, setSingleOtherDetails] = useState({
        description: ""
      })
      return (
        <div className='w-full'>
          <div className='mb-2'>
            <label htmlFor='description' className="block">Job Description</label>
            <textarea className=' input-form ' id="description" name='description' placeholder='20/01/2020' value={singleOtherDetails?.description} onChange={(e) => setSingleOtherDetails({
              ...singleOtherDetails,
              description: e.target.value
            })} >
    
            </textarea>
          </div>
    
          <div>
            <button className='p-2 rounded-md bg-blue-400 text-white text-md' onClick={()=>setOtherDetails([...otherDetails, singleOtherDetails])}>
              Add
            </button>
          </div>
    
        </div>
      )
}

export default OtherInfo
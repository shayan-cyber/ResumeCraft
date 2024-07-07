import React from 'react'

function BasicInfo({basicDetails, setBasicDetails}) {


    return (
        <div className='w-full'>
            <div className="mb-2">
                <label htmlFor='name' className="block">Name</label>
                <input className=' input-form ' id="name" name='name' placeholder='John Doe' value={basicDetails?.name} onChange={(e)=>setBasicDetails({
                    ...basicDetails,
                    name:e.target.value
                })} />
            </div>
            <div className="mb-2">
                <label htmlFor='title' className="block">Title</label>
                <input className=' input-form ' id="title" name='title' placeholder='Frontend Developer' value={basicDetails?.title} onChange={(e)=>setBasicDetails({...basicDetails,
                    title:e.target.value
                })} />
            </div>
            <div className="mb-2">
                <label htmlFor='linkedInLink' className="block">LinkedIn Link</label>
                <input className=' input-form ' id="linkedInLink" name='linkedInLink' value={basicDetails?.linkedin_link} onChange={(e)=>setBasicDetails({
                    ...basicDetails,
                    linkedin_link:e.target.value
                })} placeholder='https://linkedIn.com/john-doe' />
            </div>
            <div className="mb-2">
                <label htmlFor='githubLink' className="block">Github Link</label>
                <input className=' input-form ' id="githubLink" name='githubLink' value={basicDetails?.github_link} onChange={(e)=>setBasicDetails({
                    ...basicDetails,
                    github_link:e.target.value
                })} placeholder='https://github.com/john-doe' />
            </div>
            <div className="mb-2">
                <label htmlFor='otherLink' className="block">Other</label>
                <input className=' input-form ' id="otherLink" name='otherLink' value={basicDetails?.other} onChange={(e)=>setBasicDetails({
                    ...basicDetails,
                    other:e.target.value
                })} placeholder='https://www.portfolio.com' />
            </div>


            <div className='grid grid-cols-2 gap-2'>
                <div>
                    <label htmlFor='email' className="block">Email</label>
                    <input className=' input-form ' type='email' id="otherLink" name='otherLink' value={basicDetails?.email} onChange={(e)=>setBasicDetails({
                        ...basicDetails,
                        email:e.target.value
                    })} placeholder='abc@gmail.com' />
                </div>

                <div>
                    <label htmlFor='phone' className="block">Phone</label>
                    <input className=' input-form' id="phone" type='text' name='phone' value={basicDetails?.phone} onChange={(e)=>setBasicDetails({
                        ...basicDetails,
                        phone:e.target.value
                    })} placeholder='+91 1234567890' />
                </div>

            </div>

        </div>
    )
}

export default BasicInfo
import Navbar from '@/components/HomePage/Navbar'
import Dummy from '@/components/ResumeTemplates/Default/Dummy';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import axios from 'axios';
import { TEMPLATES } from '@/constants';
function select_template({ savedResumes }) {
    console.log({savedResumes});

    let resumeTemplates = {
        Default: <Dummy data={null}/>
    }

    const getResumeTemplate = (data, id) =>{

        let templates = {
            Default: <Dummy data={data} />
        }

        return templates[TEMPLATES[id]]

    }
    return (
        <div className='bg-warm-grey'>

            <Navbar />
            <div className='px-16 py-5'>
                <h1 className='text-3xl'>Select A Template</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 my-12'>

                    {
                        Object.keys(resumeTemplates).map((item, key) => {
                            return (
                                <Link href={`/builder?template=${item}`} key={key}>
                                    <div className='w-full h-[620px] rounded-2xl shadow-md bg-white card1 cursor-pointer' >
                                        {resumeTemplates[item]}
                                    </div>
                                </Link>

                            )
                        })
                    }


                </div>

            </div>

            {savedResumes && (
                <div className='px-16 py-5'>
                    <h1 className='text-3xl'>Your Saved Templates</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 my-12'>

                        {
                            savedResumes?.map((item, key) => {
                                return (
                                    <Link href={`/builder?template=${TEMPLATES[item?.resume_id-1]}&id=${item?.id}`} key={key}>
                                        <div className='w-full h-[620px] rounded-2xl shadow-md bg-white card2 cursor-pointer ' >
                                            {getResumeTemplate(item, item?.resume_id-1)}
                                        </div>
                                    </Link>

                                )
                            })
                        }


                    </div>

                </div>
            )}



        </div>
    )
}

export default select_template

export const getServerSideProps = async (ctx) => {

    const { userId, getToken } = getAuth(ctx.req);
    let savedResumes = null;
    console.log({userId});
    if (userId) {
        const token = await getToken();
        const res = await axios.get(`${process.env.API_URL}/api/resumedata/get_resume_data`, { headers: { "Authorization": `Bearer ${token}` } });
        savedResumes = res?.data?.resumeData
        console.log({ savedResumes });

    }
    return { props: { ...buildClerkProps(ctx.req), savedResumes: savedResumes } };

}
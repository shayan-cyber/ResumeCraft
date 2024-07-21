import Navbar from '@/components/HomePage/Navbar'
import Dummy from '@/components/ResumeTemplates/Default/Dummy';
import Link from 'next/link';
import React, { useState } from 'react'
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import axios from 'axios';
import { TEMPLATES } from '@/constants';
import Tabs from '@/components/SelectTemplate/Tabs';
import { TABS_SELECT_TEMPLATE } from '@/constants';
import { SignInButton, SignedIn, SignedOut, UserButton, SignOutButton } from '@clerk/nextjs'
import { GoArrowRight } from 'react-icons/go';
import { TbAB, TbError404 } from 'react-icons/tb';
import { PiSignInBold } from 'react-icons/pi';
function SelectTemplate({ savedResumes, userId }) {
    const [selectedTab, setSelectedTab] = useState(TABS_SELECT_TEMPLATE.YOUR_RESUMES);

    let resumeTemplates = {
        Default: <Dummy data={null} />
    }

    const getResumeTemplate = (data, id) => {

        let templates = {
            Default: <Dummy data={data} />
        }

        return templates[TEMPLATES[id]]

    }
    return (
        <div className='bg-warm-grey px-2 lg:px-8 pb-8 min-h-screen'>

            <Navbar />

            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {selectedTab === TABS_SELECT_TEMPLATE.TEMPLATES ? (

                <div className='px-2 lg:px-16 py-5 bg-white rounded-l-2xl rounded-r-2xl mt-[-1rem] z-20 relative rounded-b-2xl shadow-lg '>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 my-12'>

                        {
                            Object.keys(resumeTemplates).map((item, key) => {
                                return (
                                    <div className='relative group' key={key}>
                                        <Link href={`/builder?template=${item}`} key={key}>
                                            <div className='w-full max-h-[620px] rounded-2xl shadow-md bg-white card1 cursor-pointer' >
                                                {resumeTemplates[item]}
                                            </div>
                                        </Link>

                                        <div className='absolute bottom-0 left-0  right-0 h-2  group-hover:h-fit text-white bg-gradient-to-r from-blue-500 to-[#ceb9f1] rounded-b-2xl'>
                                            <p className='text-center text-lg hidden  group-hover:block'>{item}</p>
                                        </div>
                                    </div>


                                )
                            })
                        }


                    </div>

                </div>
            ) : (

                <div className='px-2 lg:px-16 py-5 bg-white min-h-[70vh]  rounded-r-2xl mt-[-1rem] z-20 relative rounded-b-2xl shadow-lg relative'>
                    <div className='absolute top-4 right-4'>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton>
                                <div className={`flex justify-center items-center rounded-full p-2 cursor-pointer hover:bg-purple-200`} >
                                    <PiSignInBold className='text-2xl' />
                                </div>
                            </SignInButton>
                        </SignedOut>

                    </div>
                    {
                        savedResumes ? (
                            <div className='relative'>


                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 my-12'>

                                    {
                                        savedResumes?.map((item, key) => {
                                            return (
                                                <div className='relative group' key={key}>
                                                    <Link href={`/builder?template=${TEMPLATES[item?.resume_id - 1]}&id=${item?.id}`} key={key}>
                                                        <div className='w-full h-[580px] rounded-2xl shadow-md bg-white card2 cursor-pointer ' >
                                                            {getResumeTemplate(item, item?.resume_id - 1)}
                                                        </div>
                                                    </Link>
                                                    <div className='absolute bottom-0 left-0 right-0 h-2  group-hover:h-fit bg-gradient-to-r from-blue-500 to-[#ceb9f1] rounded-b-2xl'>
                                                        <p className='text-center text-lg text-white hidden group-hover:block'>{TEMPLATES[item?.resume_id - 1] + " - "} <span className='text-xs' suppressHydrationWarning={true}>{new Date(item?.updated_at).toLocaleDateString()}</span></p>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }


                                </div>
                            </div>
                        ) : (
                            <div className='flex justify-center items-center  h-[70vh] relative'>
                                {userId ? (

                                    <div>

                                        <div className='my-4 flex justify-center items-center'>
                                            <TbError404 className='text-[10rem] ' />
                                        </div>
                                        <p className='text-xl text-black text-center px-2'>You have not saved any resumes yet</p>

                                        <div className='flex justify-center items-center my-6'>
                                            <button className='bg-black text-white p-2 text-lg font-[550] px-8 hover:scale-95 transition-all delay-75  rounded-lg flex justify-center items-center gap-2' onClick={() => {
                                                setSelectedTab(TABS_SELECT_TEMPLATE.TEMPLATES)
                                            }}>

                                                <h1>Select Template</h1>
                                                <GoArrowRight className='lg:text-xl' />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className='my-4 flex justify-center items-center'>
                                            <TbError404 className='text-[10rem] ' />
                                        </div>
                                        <p className='text-xl text-black px-2 text-center'>You need to login to save your resumes</p>

                                        <div className='flex justify-center items-center my-6'>
                                            <button className='bg-black text-white p-2 text-lg font-[550] px-8 hover:scale-95 transition-all delay-75  rounded-lg flex justify-center items-center gap-2'>

                                                <SignInButton />
                                                <GoArrowRight className='lg:text-xl' />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    }

                </div>

            )}





        </div>
    )
}

export default SelectTemplate

export const getServerSideProps = async (ctx) => {

    const { userId, getToken } = getAuth(ctx.req);
    let savedResumes = null;
    console.log({ userId });
    if (userId) {
        const token = await getToken();
        const res = await axios.get(`${process.env.API_URL}/api/resumedata/get_resume_data`, { headers: { "Authorization": `Bearer ${token}` } });
        savedResumes = res?.data?.resumeData
        console.log({ savedResumes });

    }
    return { props: { ...buildClerkProps(ctx.req), savedResumes: savedResumes, userId: userId } };

}
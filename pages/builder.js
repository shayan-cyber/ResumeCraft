import BuilderPage from '@/components/BuilderPage/BuilderPage'
import React from 'react'
import axios from 'axios';
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";





function builder({resumeData}) {
  return (
    <div className='bg-warm-grey'>
      <BuilderPage resumeData={resumeData}  />
    </div>
  )
}



export const getServerSideProps = async (ctx) => {
  const { userId, getToken } = getAuth(ctx.req);
  console.log({ userId });

  let resumeData = null;
  if (!userId) {


    // handle user is not signed in.
  } else {

    try {
      const token = await getToken();
      const res = await axios.get(`${process.env.API_URL}/api/resumedata/get_resume_data`, { headers: { "Authorization": `Bearer ${token}` } });
       resumeData = res?.data?.resumeData
      //  trimmed_resumeData = removeID(resumeData);
      
    } catch (e) {
      console.log({ e });
    }

  }

  // Load any data your application needs for the page using the userId

  return { props: { ...buildClerkProps(ctx.req) , resumeData:resumeData} };
};

export default builder
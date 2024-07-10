import BuilderPage from '@/components/BuilderPage/BuilderPage'
import React from 'react'
import axios from 'axios';
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { TEMPLATES } from '@/constants';





function builder({ resumeData }) {
  return (
    <div className='bg-warm-grey'>
      <BuilderPage resumeData={resumeData} />
    </div>
  )
}



export const getServerSideProps = async (ctx) => {
  console.log("here: ", ctx.query.template);
  const id = ctx.query.id ? ctx.query?.id : null;
  const { userId, getToken } = getAuth(ctx.req);
  console.log({ userId });
  let resumeData = null;
  if (userId && id) {


    try {
      const token = await getToken();
      const res = await axios.get(`${process.env.API_URL}/api/resumedata/get_resume_data?id=${id}`, { headers: { "Authorization": `Bearer ${token}` } });
      resumeData = res?.data?.resumeData

    } catch (e) {
      console.log({ e });
    }

  }


  return { props: { ...buildClerkProps(ctx.req), resumeData: resumeData } };
};

export default builder
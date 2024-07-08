import { isString } from "lodash";

export const removeID = (resumeData)=>{
    let basic_details = resumeData?.basic_details;
    const {id, resume_data_id, ...trimmed_basic_details} = basic_details;
    console.log({trimmed_basic_details});
  
    console.log({trimmed_basic_details});
    let work_details = resumeData?.work_details;
    work_details = work_details?.map((item)=>{
      const {id, resume_data_id, ...trimmed_work_detail} = item;
      return trimmed_work_detail;
    })
    
    let education_details = resumeData?.education_details;
    education_details = education_details?.map((item)=>{
      const {id, resume_data_id, ...trimmed_education_detail} = item;
      return trimmed_education_detail;
    })
  
    let project_details = resumeData?.project_details;
    project_details = project_details?.map((item)=>{
      const {id, resume_data_id, ...trimmed_project_detail} = item;
      return trimmed_project_detail;
    })

    let skills_details = resumeData?.skills_details;
    skills_details = skills_details?.map((item)=>{
      if(isString(item)){
        return item;
      }else{
        const {text} = item;
        return  text;
      }
    })

    let other_details = resumeData?.other_details;
    other_details = other_details?.map((item)=>{
      if(isString(item)){
        return item;
      }else{
        const {description} = item;
        return description
      }
    })
  
    let trimmed_resume_data = {
      basic_details:trimmed_basic_details,
      work_details:work_details,
      education_details:education_details,
      project_details:project_details,
      skills_details:skills_details,
      id:resumeData?.id,
      resume_id:1,
      other_details:other_details,
      user_id:resumeData?.user_id
    }
    console.log({trimmed_resume_data});
    return trimmed_resume_data;
  }
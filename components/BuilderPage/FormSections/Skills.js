import React from 'react'
import { WithContext as ReactTags } from "react-tag-input";
const KeyCodes = {
    comma: 188,
    enter: 13,
    tab:9
  };
  
const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.tab];
function Skills({skillsDetails, setSkillsDetails}) {
    const [skills, setSkills] = React.useState([]);

    
    const handleDelete = (i) => {
        setSkills(skills.filter((skill, index) => index !== i));
    };

    const handleAddition = (skill) => {
      setSkills([...skills, skill]);
    };
    return (
      <>
      <label className='mb-4'>
      <h1 className='text-xl font-[550]'>Skills</h1>
      </label>
      <div id="tags" className='mt-2 mb-4'>
        <ReactTags
          tags={skills}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          inputFieldPosition="bottom"
          autocomplete
          classNames={"input-form"}
          placeholder='Please Enter a Skill'
          allowDragDrop={false}
        />
      </div>
      <button className='add-btn' onClick={()=>{
        setSkillsDetails(skills)
      }} >Save</button>
      </>
    );
}

export default Skills
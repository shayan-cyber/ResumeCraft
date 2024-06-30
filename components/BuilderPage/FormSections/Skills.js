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
      <label className='mb-4'>Skills</label>
      <div id="tags" className='mt-2'>
        <ReactTags
          tags={skills}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          inputFieldPosition="bottom"
          autocomplete
          placeholder='Please Enter a Skill'
          allowDragDrop={false}
        />
      </div>
      <button className='p-2 rounded-md bg-blue-400 text-white text-md mt-4 px-6' onClick={()=>{
        setSkillsDetails(skills)
      }} >Save</button>
      </>
    );
}

export default Skills
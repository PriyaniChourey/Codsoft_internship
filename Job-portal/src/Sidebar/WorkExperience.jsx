import React from 'react'
import InputField from '../component/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
        <h4 className='mb-2 text-lg font-bold'>Work Experience</h4>
   <div> 
    <label className='sidebar-label-container'>
        <input type="radio" name="test" id="test" value="" onChange={handleChange} />
        <span className='checkmark'></span>
    </label>

    <InputField handleChange={handleChange} value="Any experience" title="Any experience" name="test"/>
    <InputField handleChange={handleChange} value="Internship" title="Internship" name="test"/>
    <InputField handleChange={handleChange} value="Work remotely" title="Work remotely" name="test"/>
    
   
   
   </div>
   
    </div>
  )
}

export default WorkExperience
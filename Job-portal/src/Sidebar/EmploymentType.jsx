import React from 'react'
import InputField from '../component/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
        <h4 className='mb-2 text-lg font-bold'>Employment Type</h4>
   <div> 
    <label className='sidebar-label-container'>
        <input type="radio" name="test" id="test" value="" onChange={handleChange} />
        <span className='checkmark'></span>Any
    </label>

    <InputField handleChange={handleChange} value="Full Time" title="Full-Time" name="test"/>
    <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="test"/>
    <InputField handleChange={handleChange} value="Part-Time" title="Part-Time" name="test"/>
    
   
   
   </div>
   
    </div>
  )
}

export default EmploymentType
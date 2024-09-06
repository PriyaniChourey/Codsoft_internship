import React from 'react'
import Button from '../component/Button'
import InputField from '../component/InputField'


const Salary = ({handleChange,handleClick}) => {
  return (
    <label>
        <h4 className='mb-5 text-lg font-bold'>Salary</h4>
            <div className='mb-4'>
                <Button onClickHandler={handleChange} value="" title="Hourly"/>
                <Button onClickHandler={handleChange} value="Monthly" title="Monthly"/>
                <Button onClickHandler={handleChange} value="Yearly" title="Yearly"/>
            </div>
            <div>
            <label className='sidebar-label-container'>
        <input type="radio" name="test" id="test" value="" onChange={handleChange} />
        <span className='checkmark'></span>All
    </label>

    <InputField handleChange={handleChange} value={30} title="< 30000k" name="test2"/>
    <InputField handleChange={handleChange} value={50} title="< 50000k" name="test2"/>
    <InputField handleChange={handleChange} value={80} title="< 80000k" name="test2"/>

    <InputField handleChange={handleChange} value={100} title="< 1000000k" name="test2"/>

            </div>
            
            </label>
    
  )
}

export default Salary
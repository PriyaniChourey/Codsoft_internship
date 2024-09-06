import React from 'react'
import InputField from '../component/InputField'

const JobPosting = ({handleChange}) => {
    const now=new Date();
    //console.log(now);//
    const fewHoursAgo = new Date(now - 24*60*60*1000)//1000=millisec//
    const twentyFourHoursAgo = new Date(now - 24*60*60*1000)//1000=millisec//
    const lastSevenDays = new Date(now - 24*60*60*1000)//1000=millisec//

    const lastMonth = new Date(now - 24*60*60*1000)//1000=millisec//

    
    console.log(twentyFourHoursAgo)
    const fewHoursAgoDate = fewHoursAgo.toISOString().slice(1,10)
    const twentyFourHourDate = twentyFourHoursAgo.toISOString().slice(1,10)

    const lastSevenDaysDate = lastSevenDays.toISOString().slice(1,10)

    const lastMonthDate = lastMonth.toISOString().slice(1,10)
    //console.log(fewHoursAgoDate)//

  return (
  <div>
    
    <h4 className='mb-4 text-lg font-bold'>JobPosting</h4>

<label className='sidebar-label-container'>
    <input type="radio" name="test" id="test" value="" onChange={handleChange} />
    <span className='checkmark'></span>All time
</label>
<InputField handleChange={handleChange} value="Few hours ago" title="Few Hours ago" name="test"/>
<InputField handleChange={handleChange} value="last 24 days" title="Last 24 days" name="test"/>
<InputField handleChange={handleChange} value="Last 7 days" title="Last 7 days" name="test"/>
<InputField handleChange={handleChange} value="Last month" title="Last month" name="test"/>





</div>
    
  )
}

export default JobPosting
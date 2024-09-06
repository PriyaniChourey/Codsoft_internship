import React, { useState } from 'react'
import { useForm } from "react-hook-form"

import CreatableSelect from 'react-select/creatable';

const JobPostCreate = () => {
    const [selectedOption,setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        
        if (selectedOption && selectedOption.length > 0) {
            data.skills = selectedOption.map(option => option.value);
        } else {
            data.skills = []; 
        }

        console.log(data); 
    };
      
      
      
 
      console.log(watch("example"))

      const options = [
        {value : "HTML",label: "HTML" },
        {value : "Java",label: "Java" },
        {value : "CSS",label: "CSS" },
        {value : "Database",label: "Database" }
      ]
  return (
    <div className='container px-2 my-6 mb-4 ml-5 mt-7 max-w-screen-1xl max-auto xl:px-60'>
    
    <div className='px-3 py-5 text-white bg-black lg:px-16'>
    <form onSubmit={handleSubmit(onSubmit)}>
        
    
<div className='flex items-center justify-between gap-9 -col lg:flex-row justify'>
    <div className='w-full lg:w-1/2'>
    <label className='block mb-2 text-lg outline-white'>
        Job-Title
    </label>

    <input type="text" defaultValue={"Web Developer"} 
    {...register("jobTitle", {required: true, maxLength: 80}) } className='flex-1 block w-full py-0 pl-3 text-black bg-white border-2 placeholder:text-2xl outline-white sm:text-sm sm:leading-7' />
    </div>
    
    
    
    <div className='w-full lg:w-1/2'>
    <label className='block mb-2 text-lg outline-white'>
        Company Name
    </label>

    <input type="text" placeholder='Ex: Google' 
    {...register("companyName", {required: true, maxLength: 80}) } className='block w-full py-0 pl-3 text-black bg-white border-2 flex-2 placeholder:text-1xl outline-white sm:text-sm sm:leading-7 text-small' />
    </div>
</div>


    <div className='flex items-center justify-between gap-8 -col lg:flex-row justify'>
    <div className='w-full lg:w-1/2'>
    <label className='block mb-2 text-lg outline-white'>
            Maximum Salary
    </label>

    <input type="text" placeholder='Eg: $40k' 
    {...register("maxPrice", {required: true, maxLength: 80}) } className='block w-full py-0 pl-3 text-black bg-white border-2 flex-2 placeholder:text-1xl outline-white sm:text-sm sm:leading-7 text-small' />
    </div>


    <div className='w-full lg:w-1/2'>
    <label className='block mb-2 text-lg outline-white'>
        Minimum Salary
    </label>

    <input type="text" placeholder='Ex: $30k' 
    {...register("minPrice", {required: true, maxLength: 80}) } className='block w-full py-0 pl-3 text-black bg-white border-2 flex-2 placeholder:text-1xl outline-white sm:text-sm sm:leading-7 text-small' />
    </div>
</div>



<div className='flex items-center justify-between gap-8 -col lg:flex-row justify'>
    <div className='w-full lg:w-1/2'>
    <label className='block mb-2 text-lg outline-white'>
            Salary Type
    </label>
    

   
    <select {...register("salaryType", { required: true })} className='block w-full py-0 pl-3 text-black bg-white border-2 flex-2 placeholder:text-1xl outline-white sm:text-sm sm:leading-7 text-small' placeholder='Choose'>
        <option value="Choose your salary"> Choose salary type</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Weekly">Weekly</option>
      </select>

    
    
    </div>


    <div className='w-full lg:w-1/2'>
    <label className='block mb-2 text-lg outline-white'>
        Job Location
    </label>

    <input type="text" placeholder='Ex: London' 
    {...register("companyName", {required: true, maxLength: 80}) } className='block w-full py-0 pl-3 text-black bg-white border-2 flex-2 placeholder:text-1xl outline-white sm:text-sm sm:leading-7 text-small' />
    </div>
</div>


<div className='flex items-center justify-between gap-8 -col lg:flex-row justify'>
    <div className='w-full lg:w-1/2'>
    <label className='block mb-2 text-lg outline-white'>
            Job Posting
    </label>

    <input type="date" placeholder='month-date-year' 
    {...register("postingDate", {required: true, maxLength: 80}) } className='block w-full py-0 pl-3 text-black bg-white border-2 flex-2 placeholder:text-1xl outline-white sm:text-sm sm:leading-7 text-small' />
    </div>


    <div className='w-full lg:w-1/2'>
    <label className='block mb-2 text-lg outline-white'>
        Experience Level
    </label>
    <select {...register("salaryType", { required: true })} className='block w-full py-0 pl-3 text-black bg-white border-2 flex-2 placeholder:text-1xl outline-white sm:text-sm sm:leading-7 text-small'>
        <option value="Select"> Select</option>
        <option value="no experience">No experience</option>
        <option value="Internship">Internship</option>
        <option value="Working">Working</option>
      </select>

    
    </div>
</div>

<div className='flex items-center justify-between gap-8 mt-5 -col lg:flex-row justify'>
    <div className='w-full lg:w-100'>
    <label>
        
        Skill set
    </label>
     <CreatableSelect defaultValue={selectedOption}
     onChange={setSelectedOption}
     options={options}
     isMulti
     className='block mb-2 text-lg text-black'/>
    
    </div>
    </div>


    <div className='flex items-center justify-between gap-8 -col lg:flex-row justify mt-7'>
    <div className='w-full lg:w-1/2'>
    <label className='block mb-2 text-lg outline-white'>
            Company Logo
    </label>

    <input type="url" placeholder='Paste image URL' 
    {...register("companyLogo", {required: true, maxLength: 80}) } className='block w-full py-0 pl-3 text-black bg-white border-2 flex-2 placeholder:text-1xl outline-white sm:text-sm sm:leading-7 text-small' />
    </div>


    <div className='w-full lg:w-1/2'>
    <label className='block mb-2 text-lg outline-white'>
       Employment Type
    </label>

    <input type="text" placeholder='Choose' 
    {...register("employmentType", {required: true, maxLength: 80}) } className='block w-full py-0 pl-3 text-black bg-white border-2 flex-2 placeholder:text-1xl outline-white sm:text-sm sm:leading-7 text-small' />
    </div>
</div>

   <div className='w-full mb-5'>
    <label className='block mt-5 mb-3 text-lg'>
Job Description
    </label>
    <textarea name='' id="" cols="90" rows="4" placeholder='Give the description' {...register("description", {required: true, maxLength: 80}) } className='pt-1.5 text-black pl-3 pb-1'></textarea>
    
   </div>
    
    <div className='w-full mb-2'>
        <label className='block mb-4 text-lg' >Job Posting Agency</label>
        <input type="email" placeholder='Write Email' 
    {...register("postedBy", {required: true, maxLength: 80}) } className='block w-full py-0 pl-3 text-black bg-white border-2 flex-2 placeholder:text-1xl outline-white sm:text-sm sm:leading-7 text-small' />
    </div>
    


      <input type="submit" className='block px-8 py-2 my-5 mt-12 text-lg text-white bg-blue-700 rounded-sm cursor-pointer text-bold' />
    
    </form>
    </div>
    </div>
         

)
}

export default JobPostCreate
import React from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa6"
import { FaRocket } from 'react-icons/fa'
import { HiNewspaper } from "react-icons/hi";


const News = () => {
  return (
    <div>
    <div>
        <h3 className='flex items-center gap-2 mb-6 text-lg font-bold text-center'>
           <FaEnvelopeOpenText/>
            Email me to Apply</h3>
            <p className='mb-4 text-base text-black/75 '>Email me and get Jobs as soon as possible</p>
        <div className='w-full space-y-4'>
            <input type='email' name="email" id="email" placeholder="name@gamil.com" className='block w-full py-2 pl-3 border focus:outline-none'></input>
         <input type='submit' value="Subscribe"  className='block w-full py-2 pl-3 font-semibold bg-blue-200 border rounded-sm cursor-pointer focus:outline-none tex-white' ></input>        
        </div>

        
    </div>

    <div className='mt-20'>
        <h3 className='flex items-center gap-5 mb-3 text-lg font-bold text-center'>
        <HiNewspaper />
        Get news from here
            </h3>
            <p className='mb-4 text-base text-black/75 '>Upload your resume to get job as soon as....</p>
        <div className='w-full space-y-4'>
            
         <input type='submit' value="Upload your Resume"  className='block w-full py-2 pl-3 font-semibold bg-blue-200 border rounded-sm cursor-pointer focus:outline-none tex-white' ></input>        
        </div>

        
    </div>
    
    </div>
  )
}

export default News
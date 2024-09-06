import React, { useState } from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";



// eslint-disable-next-line react/prop-types
const Banners = () => {
  const [query,setQuery] = useState("");
  const handleInputChange =(event) =>
  {
    setQuery(event.target.value)
  }

  return (
    <div className='container mx-auto max-w-screen-2xl py-14 xl:px-23 md:py-20'>
        <h1 className='text-5xl font-bold text-black'>Find <span className='text-4xl font-bold text-blue-400'>New Jobs</span> here</h1>
        <p className='mb-8 text-lg text-black/80'> You will get many jobs of various fields in this platform</p>
        <form>
            <div className='flex flex-col justify-start gap-4 md:flex-row md:gap-2'>
                <div className='flex w-full text-center rounded shadow -sm md:rounded-md ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 md:w-1/3'>
                
                    <input type="text" name='title' id='title'  placeholder="Position you are searching for"className='flex-1 block bg-blue-200 border-0 py-1.5 pl-8 text-blue-700 placeholder:text-blue-500 focus:right-3 sm:text-sm sm:leading-8 onChange={(e) => setSearchText(e.target.value)}' />
                    <FaSearchLocation className='absolute mt-2.5 ml-2 text-black'/>
                </div>
                <div className='flex w-full text-center rounded shadow -sm md:rounded-md ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 md:w-1/3'>
                
                    <input type="text" name='titl' id='titl'  placeholder="Location"className='flex-1 block bg-blue-200 border-0 py-1.5 pl-8 text-blue-700 placeholder:text-blue-500 focus:right-3 sm:text-sm sm:leading-8'/>
                    <IoLocationSharp className='absolute mt-2.5 ml-2 text-black'/>
                </div>
            <button type='submit' className='px-8 py-2 text-white bg-blue-600 md:rounded-sm'>Search</button>
            </div>
            </form>
    </div>

  )
}

export default Banners
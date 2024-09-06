import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const MyJobs = () => {

   // const email = "priyanichourey2903@gmail.com"
    const [jobs, setJobs] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [isLoading,setIsLoading] = useState(true);
    const [currentPage,setCurrentPage] = useState(1);
    const itemsPerPage =3;
    
    useEffect(() => {
        setIsLoading((true))
        fetch(``).then(res => res.json()).then(data => {
            setJobs(data)
        }) 
    }, [searchText])
    
    //Pages

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem)
    
    const nextPage = () =>
    {
      if(indexOfLastItem < jobs.length)
      {
        setCurrentPage(currentPage+1)
      }
    }

    const previousPage = () =>
    {
      if(currentPage > 1)
      {
        setCurrentPage(currentPage - 1)
      }
    }

    const handleSearch = () =>
    {
        const filter = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        console.log(filter)
        setJobs(filter);
        setIsLoading(false)
    }

   const handleDelete = (id) =>
   {
    console.log(id)
    fetch(`http://localhost:8080/job/${id}`,{
      method: "DELETE"
    }).then(res => res.json).then(data =>
    {
      if(result.acknowledged == true)
      {
        alert("Job deleted")
      }
    }
    )
   }
   
    console.log(searchText)
  return <div className='container px-4 mx-auto max-w-screen-2xl xl:px-24'>
    <div className='my-jobs-container'>
        <h1 className='p-4 mt-4 text-center text-bold'>All Jobs</h1>
        <div>
            <input type="text" name="search" id="search" className='w-full py-2 pl-3 mt-3 mb-4 border outline focus lg:w-6/12' 
             onChange={(e) => setSearchText(e.target.value)}/>
<button className='py-3 mb-4 ml-6 font-semibold text-white bg-blue-600 rounded-sm px-7' onClick={handleSearch}> Search
         
        </button>
        </div>
    </div>
    <section className="py-1 bg-blueGray-50">
<div className="w-full px-4 mx-auto mt-20 mb-12 xl:w-8/12 xl:mb-0 ">
  <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg ">
    <div className="px-4 py-3 mb-0 border-0 rounded-t">
      <div className="flex flex-wrap items-center">
        <div className="relative flex-1 flex-grow w-full max-w-full px-4">
          <h3 className="text-base font-semibold text-blueGray-700"> Your Jobs</h3>
        </div>
        <div className="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
          <Link to="/post-job"><button className="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none" type="button">Post Job</button>
       </Link>
        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center w-full bg-transparent border-collapse ">
        <thead>
          <tr>
            <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                          S no.
                        </th>
          <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                          Title
                        </th>
           <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                          Company Name
                        </th>
          <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                          Salary
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                          Edit
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                          Delete
                        </th>
          </tr>
        </thead>
        

      
            
 <tbody>
          
            
            <tr>
                <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap text-blueGray-700 ">
                  1
                </th>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap ">
                  Web Developer
                </td>
                <td className="p-4 px-6 text-xs border-t-0 border-l-0 border-r-0 align-center whitespace-nowrap">
                  IBM
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap text">
                  <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  $ 60k - $ 90k
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  <button className='px-6 py-2 bg-purple-400 rounded-sm text-whitw'>Edit</button>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  <button onClick={() => handleDelete(job._id)} className='px-6 py-2 bg-red-600 rounded-sm'>Delete</button>
                </td>
              </tr>
              <tr>
                <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap text-blueGray-700 ">
                2
                </th>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap ">
                  Graphic Designer
                </td>
                <td className="p-4 px-6 text-xs border-t-0 border-l-0 border-r-0 align-center whitespace-nowrap">
                 Microsoft
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  $ 40k - $ 60k
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  <button className='px-6 py-2 bg-purple-400 rounded-sm'>Edit</button>
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  <button className='px-6 py-2 bg-red-600 rounded-sm'>Delete</button>
                </td>
              </tr>
                
            
 {
          
          isLoading ? (<div className='flex items-center justify-center h-20'><p>Loading.....</p></div>) :(alert("No such jobs"))}
            
  
            
          </tbody>
        

       

      </table>
    </div>
  </div>
</div>
<div className='flex justify-center space-x-8 text-black'>
  {
    currentPage > 1 && (
      <button className='hover:underline' onClick={previousPage} >Previous</button>
    ) 
  }
  {
    indexOfLastItem < jobs.length && (
      <button className='hover:underline'onClick={nextPage}>Next</button>
    )
  }
  
</div>
</section>
    </div>;
};

export default MyJobs
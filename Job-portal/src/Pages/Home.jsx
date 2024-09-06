import React, { useEffect, useState } from 'react'
import Banners from "../component/Banners"
import Jobs from './Jobs';
import Card from '../component/Card';
import Side from '../Sidebar/Side';
import News from '../component/News';

const Home = () => {
 const[selectedCategory,setSelectedCategory]=useState(null);
 const[jobs,setJobs]=useState([]);
 useEffect(()=> 
{
  fetch("jobs.json").then(res=>res.json()).then(data =>
  {
    setJobs(data);
  }
  )
})

 const [isLoading,setIsLoading] =useState(true);
 const[currentPage,setCurrentPage] = useState(1);
 const itemsPerPage=6;
  useEffect(() =>
{
  setIsLoading(true);
  
  fetch("jobs.json").then(res => res.json()).then(data => {
    //console.log(data)//
    setJobs(data);
    setIsLoading(false)
  })
},[])
//console.log(jobs)//


    const [query,setQuery] = useState("");
    const handleInputChange = (event) =>
    {
        setQuery(event.target.value)
    }
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    const handleChange = (event) =>
    {
      setSelectedCategory(event.target.value)
    }
    const handleClick =(event) =>
    {
      setSelectedCategory(event.target.value)
    }

    //index range//
    const calculatePageRange=( )=> {
      const startIndex=(currentPage-1)*itemsPerPage;
      const endIndex=startIndex+ itemsPerPage;
      return(startIndex,endIndex);
    }

    //next page//
    const nextPage =() =>
    {if(currentPage<Math.ceil(filteredItems.length / itemsPerPage))
    {
      setCurrentPage(currentPage+1);
    }
    }

    //previous page//
    const prevPage =() =>
    {
      if(currentPage>1)
      {
        setCurrentPage(currentPage-1);
      }
    }
    //main//

    const filteredData = (jobs,selected,query) =>
    {
      let filteredJobs = jobs;
      if(query)
      {
        filteredJobs=filteredItems;
      }
      if(selected)
      {
      
      filteredJobs = filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate}) =>
      (
      jobLocation.toLowerCase()===selected.toLowerCase()||
      parseInt(maxPrice) === parseInt(selected)||
      postingDate >=  selected ||
      salaryType.toLowerCase()=== selected.toLowerCase()||
      employmentType.toLowerCase()=== selected.toLowerCase()||
      experienceLevel.toLowerCase() ===selected.toLowerCase()
      
      
      ));
      console.log(filteredJobs);
      }
      //data based on cp//
      const{startIndex,endIndex} = calculatePageRange();
      filteredJobs=filteredJobs.slice(startIndex,endIndex);
      return filteredJobs.map((data,i) => <Card key={i} data={data}/>)
    }
    const result = filteredData(jobs,selectedCategory,query);
    return (
    <div>
        <Banners query={query} handleInputChange={handleInputChange}/>
        <div className='grid gap-12 px-4 py-12 bg-blue-500 md:grid-cols-4 lg:px-24'>
          <div className='p-4 bg-blue-400 rounded'><Side handleChange={handleChange} handleClick={handleClick}/></div>
          <div className='col-span-2 px-12 py-8 bg-blue-300 rounded-sm'> 
            {
              isLoading?(<p className='font-medium'>Loading......</p>) : result.length>0?(<Jobs result={result}/> ) :<>
              <h3 className='mb-2 text-lg font-bold'>{result.length} Jobs</h3>
              <p>No job data is founded</p> </>        }

              {
                result.length > 0 ?(
                  <div className='flex justify-center mt-8 space-x-9'>
                    <button onClick={prevPage} disabled={currentPage===1} className='hover:underline'>Previous</button>
                    <span className='mx-3'>Page {currentPage}of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                    <button onClick={nextPage} disabled={currentPage===Math.ceil(filteredItems.length/itemsPerPage)} className='hover:underline'> Next</button>

                    </div>
                ):""
              }
             </div>
          <div className='p-4 bg-blue-400 rounded'><News/></div>

          
        </div>
    </div>
  )
}

export default Home
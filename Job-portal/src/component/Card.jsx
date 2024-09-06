import React from 'react'
import { Link } from 'react-router-dom'
import { TfiLocationPin } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";

const Card = ({data}) => {
  const{companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation,employmentType,postingDate,description}=data
  return (
    
      <section className='card'>
        <Link to={"/"} className='flex items-start gap-4-col sm:flex-row'>
         <img src={companyLogo} alt="" />
         <div>
          <h4 className='mb-1 text-black'>{companyName}</h4>
          <h3 className='mb-2 text-lg font-semibold'>{jobTitle}</h3>
          <div className='flex flex-wrap gap-2 mb-2 text-base text-black/80'>
          <span className='flex items-center gap-2'><TfiLocationPin />{jobLocation}</span>
          <span className='flex items-center gap-2'><IoMdTime />{employmentType}</span>
          <span className='flex items-center gap-2'><MdOutlineAttachMoney />{maxPrice}-{minPrice}k</span>
          <span className='flex items-center gap-2'><MdOutlineDateRange />{postingDate}</span>
          </div>
          <p className='text-base text-black/70'>
            {description}
          </p>
         </div>
        </Link>

      </section>
    
  )
}

export default Card
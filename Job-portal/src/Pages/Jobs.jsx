import React from 'react'

const Jobs = ({result}) => {
  return (
    <>
    <div>
    <h3 className='mb-2 text-lg font-bold'>{result.length} Jobs</h3>
    </div>

    <section className='mb-1 card-container'>
    {result}
    </section>
    
    </>
  )
}

export default Jobs
import React from 'react'

const page = () => {
  return (
    <div className='flex-col md:justify-center md:items-center '>
      <div className='md:w-2/4 md:bg-base-300 md:ml-5 card mt-3 md:py-5'>
        <section className='flex justify-between items-start'>
          <h1 className='ml-4 text-white text-2xl font-bold  btn btn-ghost btn-square w-fit'>Lethabo Maepa</h1>
          <button className='btn btn-error mr-3'>Logout</button>
        </section>
        
        
        <div className='flex items-center justify-around mt-10'>
          <button className="btn btn-lg btn-circle btn-accent ">LM</button>

          <div className='flex-col items-center w-3/4 max-w-screen-sm'>
            
            <div className='flex items-end justify-around'>
              <label>0 <p>Quizzes</p></label>
              <label>5 <p>Followers</p></label>
              <label>11 <p>Following</p></label>
            </div>
          </div>
        </div>
        <section className='w-2/5'>
          <p className='mt-10 ml-3 md:ml-5 text-sm'>lethabo.m.11</p>
          <p className=' ml-3 md:ml-5 text-sm  text-white'>Bio here..</p>
        </section>
        
        <div className='flex justify-evenly items-center mt-5'>
          <button className='btn btn-primary text-white px-10'>Follow</button>
          <button className='btn btn-neutral px-5'>Profile Info</button>
          <button className='btn btn-neutral px-5'>Quizzes</button>
        </div>
      </div>
      
    </div>
  )
}

export default page

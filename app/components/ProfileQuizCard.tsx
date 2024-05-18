
import React from 'react'

const ProfileQuizCard = ({sessionUser}:any) => {
  return (
    <div className='w-full  h-20 p-2 flex my-2 text-white items-center justify-between rounded-lg hover:bg-cyan-700 cursor-pointer'>
        
        <section className='flex justify-center items-center gap-2'>
        <figure className=' w-14 h-14 rounded-full '><img className='w-full h-full' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <span>
              <h1 className='font-bold text-lg'>Topic</h1>
              <p>10 Questions</p>
            </span>
            
            
        </section>
        {!sessionUser?
        <button className='btn btn-primary text-white px-6'>Try Quiz</button>:
        <button className='btn btn-error text-white px-6'>Delete</button>}
    </div>
  )
}

export default ProfileQuizCard

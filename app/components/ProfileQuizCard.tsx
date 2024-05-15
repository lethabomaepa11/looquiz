
import React from 'react'

const ProfileQuizCard = () => {
  return (
    <div className='w-full h-20 p-2 flex my-2 text-white items-center justify-evenly rounded-lg hover:bg-cyan-700 cursor-pointer'>
        <figure className=' w-14 h-14 rounded-full '><img className='w-full h-full' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        
        <section>
            <h1 className='font-bold text-lg'>Topic</h1>
            <p>10 Questions</p>
            
        </section>
        <button className='btn btn-primary text-white'>Try Quiz</button>
        <button className='btn btn-error text-white'>Delete</button>
    </div>
  )
}

export default ProfileQuizCard

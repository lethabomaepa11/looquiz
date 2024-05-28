import React from 'react'
import Link from 'next/link'


const ProfileResponses = async ({response}) => {
  return (
    <div className='w-full  h-20 p-2 flex my-2 text-white items-center justify-between rounded-lg hover:bg-cyan-700 cursor-pointer'>
        
          <section className='flex justify-center items-center gap-2'>
          <figure className=' w-14 h-14 rounded-full '><img className='w-full h-full' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <span>
                <h1 className='font-bold text-lg'>{response.quiz.topic}</h1>
                <p>{response.quiz.numQuestions} Questions</p>
              </span>
          </section>
          <Link href={`/results/${response.id}`} className='btn btn-primary'>View Results</Link>
    </div>
  )
}

export default ProfileResponses

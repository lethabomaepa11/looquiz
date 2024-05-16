import React from 'react'
import ProfileCard from '../components/ProfileCard'
import ProfileQuizCard from '../components/ProfileQuizCard'

const page = () => {
  return (
    <div className='md:flex md:justify-around'>
      <main className='flex-col md:w-2/4'>
        <ProfileCard/>
        <div className='card md:w-full md:ml-5 bg-base-200  mt-3 p-5'>
        <h1 className='text-white font-bold'>Profile Info</h1>
      </div>
      </main>
      <div className='card md:w-2/5 h-screen bg-base-200 mt-3 p-5 '>
        <h1 className='text-white font-bold'>Quizzes</h1>
        <section className='overflow-auto'>
          <ProfileQuizCard/>
          <ProfileQuizCard/>
          <ProfileQuizCard/>
          <ProfileQuizCard/>
          <ProfileQuizCard/>
          <ProfileQuizCard/>
          <ProfileQuizCard/>
          <ProfileQuizCard/>
          <ProfileQuizCard/>
          <ProfileQuizCard/>
          <ProfileQuizCard/>
          <ProfileQuizCard/>
        </section>
        
      </div>
      
      
    </div>
  )
}

export default page

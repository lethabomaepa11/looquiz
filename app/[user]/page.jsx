import React from 'react'
import ProfileCard from '../components/ProfileCard'
import ProfileQuizCard from '../components/ProfileQuizCard'
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import { Profile } from '@/lib/session';

async function getUser(params)
{
  const user = await prisma.User.findUnique(
    {
      where: {username: params.user},
    }
  )

  return user;
}

const  page = async ({params}) => {
  
  const user = await getUser(params);
  const sessionUser = await Profile() == user.username?true:false;
 
  
  if(user === null)
    {
      notFound()
    }
    else{


  return (
    <div className='md:flex md:justify-around'>
      <main className='flex-col md:w-2/4'>
        <ProfileCard
        username = {user.username}
        email = {user.email}
        sessionUser={sessionUser}/>
        <div className='card md:w-full md:ml-5 bg-base-200  mt-3 p-5'>
        <h1 className='text-white font-bold'>Profile Info</h1>
      </div>
      </main>
      <div className='card md:w-2/5 h-screen bg-base-200 mt-3 p-5 '>
        <h1 className='text-white font-bold'>Quizzes</h1>
        <section className='overflow-y-auto w-full'>
          <ProfileQuizCard
          sessionUser={sessionUser}/>
        </section>
        
      </div>
      
      
    </div>
  )
}
}

export default page

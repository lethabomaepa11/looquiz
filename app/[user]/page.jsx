import React from 'react'
import ProfileCard from '../components/ProfileCard'
import ProfileQuizCard from '../components/ProfileQuizCard'
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import { Profile } from '@/lib/session';
import { cache } from 'react';

async function getUser(params)
{
  const user = await prisma.User.findUnique(
    {
      where: {username: params.user},
    }
  )

  if(user != null){

    return user;
  }
  else{
    return null;
  }
}

export const getQuizzes = cache(async (userId) =>
{
  //fetches all the quizzes created by this user
  const quizzes = await prisma.Quiz.findMany({
    where: {authorId: userId}
  })
  return quizzes
})

export const revalidate = 100

const  page = async ({params}) => {
  
  const user = await getUser(params);
  
 
  
  if(user == null)
    {
      notFound()
    }
    else{
      const sessionUser = await Profile() == user.username?true:false;
      const quizzes = await getQuizzes(user.id)
      let isLoggedIn = await Profile() != undefined?true:false;

  return (
    <div className='md:flex md:justify-around'>
      <main className='flex-col md:w-2/4'>
        <ProfileCard
        username = {user.username}
        email = {user.email}
        quizzes={quizzes.length}
        sessionUser={sessionUser}
        isLoggedIn={isLoggedIn}/>
        <div className='card md:w-full md:ml-5 bg-base-200  mt-3 p-5'>
        <h1 className='text-white font-bold'>Profile Info</h1>
      </div>
      </main>
      <div className='card md:w-2/5 h-screen bg-base-200 mt-3 p-5 '>
        <h1 className='text-white font-bold'>Quizzes</h1>
        <section className='overflow-y-auto w-full'>
        
             
              {quizzes.length > 0 ? quizzes.map((quiz) => {
                return (
                <ProfileQuizCard
                key={quiz.id} 
                sessionUser={sessionUser}
                isLoggedIn={isLoggedIn}
                quiz={quiz}/>
                )
            }): <div className='flex justify-center items-center w-full h-full'>
            <div className="swap-off">Nothing to see here...🥶</div>
            </div>
            }
        
        </section>
        
      </div>
      
      
    </div>
  )
}
}

export default page

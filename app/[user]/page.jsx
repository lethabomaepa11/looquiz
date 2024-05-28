import React from 'react'
import ProfileCard from '../components/ProfileCard'
import ProfileQuizCard from '../components/ProfileQuizCard'
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import { Profile } from '@/lib/session';
import { cache } from 'react';
import Link from 'next/link';
import ProfileResponses from "@/app/components/ProfileResponses"

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

const getQuizzes = async (userId) =>
{
  //fetches all the quizzes created by this user
  const quizzes = await prisma.Quiz.findMany({
    where: {authorId: userId}
  })
  return quizzes
}

const getMyResponses = async(myId) =>{
  //fetches all my(user)'s responses to quizzes
  const responses = await prisma.QuizResponse.findMany(
    {
      where: {userId: myId},
      include: {quiz: true}
    }
  )

  console.log(responses)
  return responses;
}


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
      const responses = await getMyResponses(user.id)

  return (
    <div className='md:flex md:justify-around h-screen '>
      <main className='flex-col md:w-2/4 h-full'>
        <ProfileCard
        username = {user.username}
        email = {user.email}
        quizzes={quizzes.length}
        sessionUser={sessionUser}
        isLoggedIn={isLoggedIn}/>
        {sessionUser &&
        <div className='card md:w-full md:ml-5 bg-base-200  mt-3 p-5 overflow-auto'>
        <h1 className='text-white font-bold'>Your Response History</h1>
        <div className='overflow-auto w-full h-72'>
        {!responses.length > 0?<p>Nothing to see here...Try quizzes...</p>:
          responses.map(response => {
            return <ProfileResponses
            key={response.id}
            response={response}/>
          })
        }
        </div>
      </div>}
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

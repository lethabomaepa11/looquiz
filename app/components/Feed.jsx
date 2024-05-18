import React from 'react'
import Card from './Card'
import prisma from '@/lib/prisma'

async function getQuizzes()
{
    const quizzes = await prisma.Quiz.findMany(
      {
        include: {
          author: {
            select: {username: true}
          }
        }
      }
    )

    return quizzes;
}

const Feed = async ({isLoggedIn}) => {
  const quizzes = await getQuizzes(); 
  return (
    <div className='lg:rounded-box overflow-hidden w-screen h-screen lg:bg-base-200 lg:ml-2 mx-4 '>
        <h1 className='text-2xl my-5 text-white font-bold ml-3'>Available Quizzes</h1>
        <main className='overflow-y-scroll flex-1 flex-wrap h-screen pb-20'>
            
            {quizzes.map((quiz) => {
                return <Card 
                key={quiz.id}
                isLoggedIn={isLoggedIn}
                quiz = {quiz}/>
            })}
            
            
        </main>
    </div>
  )
}

export default Feed

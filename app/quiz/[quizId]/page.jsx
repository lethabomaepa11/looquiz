import React from 'react'
import QuizPages from '@/app/components/QuizPages'
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma'

async function getQuiz(params)
{
  const quiz = await prisma.Quiz.findUnique(
    {
      where: {id: params.quizId},
      include: {author: true}
    }
  )
  if(quiz != null){

    return quiz;
  }
  else{
    return null;
  }
}

async function getQuestions(quizId){
  const questions = await prisma.Question.findMany(
    {
      where: {quizId: quizId},
      include: {answers: true}
    }
  )
  return questions
}


const Quiz = async ({params}) => {
  const quiz = await getQuiz(params)
  
  if(quiz == null){
      notFound()
  }
  else{
    const questions = await getQuestions(quiz.id)
  return (
    <QuizPages
    quiz={quiz}
    questions={questions}/>
  )}
}

export default Quiz

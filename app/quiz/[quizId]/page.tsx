'use client'
import Quiz from '@/app/components/Quiz'
import TryQuizPrompt from '@/app/components/TryQuizPrompt'
import Link from 'next/link'
import { Router } from 'next/router'
import {useState,useEffect} from 'react'
import QuizData from '@/app/components/QuizData'


const QuizView = () => {

  const [view, setview] = useState(-1);

  function handleContinue()
  {
    setview(prevView => 
      {
        console.log(prevView)
        return (++prevView);
      }
    )
  }
  function prevClick()
  {
    setview(prevView => 
      {
        return (--prevView);
      }
    )
  }
  
  

  return (
    <div className='flex justify-center items-center'>
      {view == -1 && <TryQuizPrompt onClick={handleContinue}/>}
      {(view >= 0) && <Quiz view={view}
      onClick={handleContinue}
      prev={prevClick}/>}
    </div>

  )
}

export default QuizView

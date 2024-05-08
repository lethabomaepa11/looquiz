'use client'
import Quiz from '@/app/components/Quiz'
import TryQuizPrompt from '@/app/components/TryQuizPrompt'
import Link from 'next/link'
import { Router } from 'next/router'
import {useState,useEffect} from 'react'
import QuizData from '@/app/components/QuizData'
import Timer from '@/app/components/Timer'


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
      
      
      <div className='w-full md:w-2/4 flex-col justify-between items-center'>
      {view == -1 && <TryQuizPrompt onClick={handleContinue}/>}
        {view >= 0 && <Timer time={1}/>}
        {(view >= 0) && <Quiz view={view}
        onClick={handleContinue}
        prev={prevClick}/>}
      </div>
      
    </div>

  )
}

export default QuizView

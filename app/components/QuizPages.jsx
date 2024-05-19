'use client'
import Quiz from '@/app/components/Quiz'
import TryQuizPrompt from '@/app/components/TryQuizPrompt'
import Link from 'next/link'
import { Router } from 'next/router'
import {useState,useEffect} from 'react'
import QuizData from '@/app/components/QuizData'
import Timer from '@/app/components/Timer'


const QuizView = ({quiz,questions}) => {

  const [view, setview] = useState(-1);

  function handleContinue()
  {
    setview(prevView => 
      {
        //console.log(prevView)
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

  function displayModal(){
    document.getElementById('my_modal_5').showModal();
  }
  
  
  //console.log(questions[0].answers.a)
  return (
    <div className='flex justify-center items-center'>
      
      
      <div className='w-full md:w-2/4 flex-col justify-between items-center'>
      {view == -1 && <TryQuizPrompt onClick={handleContinue} quiz={quiz} questions={questions}/>}
        {view >= 0 && <Timer time={quiz.timeLimit}
        displayModal={displayModal}/>}
        {(view >= 0) && <Quiz view={view}
        onClick={handleContinue}
        prev={prevClick}
        displayModal={displayModal}
        quiz={quiz} questions={questions}/>}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">You have completed this quiz!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link className="btn btn-square" href="/">Close</Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>

  )
}

export default QuizView

'use client'
import React from 'react'
import quiz_data from './QuizData';
import ContinueBtn from './ContinueBtn';





const Quiz = ({view,onClick,prev,displayModal,quiz,questions,responses}: any) => {
  const question = quiz_data[0].questions[view];
  

  

  return (
    
    <div className='w-full items-start card flex-col text-white  pl-5 pt-5'>
      
      <h1 className='btn btn-square btn-ghost w-fit text-2xl mb-10'>{quiz.topic}</h1>
      <h1 className='text-lg font-bold mb-5'>Question {view+1}</h1>
      <h1 className='text-base'>{questions[view].text}</h1>
     
      <label  className='my-3 btn-ghost btn-square btn px-5 w-fit'><input  type='radio' className='radio-primary mr-3' value={questions[view].answers[0].a} name="answers"/>
       A: {questions[view].answers[0].a}
      </label>
      
      <label className='my-3 btn-ghost btn-square btn px-5 w-fit'><input  type='radio' className='radio-primary mr-3' value={questions[view].answers[0].b} name="answers"/>
       B: {questions[view].answers[0].b}
      </label>
            
      <label className='my-3 btn-ghost btn-square btn px-5 w-fit'><input  type='radio' className='radio-primary mr-3' value={questions[view].answers[0].c} name="answers"/>
       C: {questions[view].answers[0].c}
      </label>

      <label className='my-3 btn-ghost btn-square btn px-5 w-fit'><input  type='radio' className='radio-primary mr-3' value={questions[view].answers[0].d} name="answers"/>
       D: {questions[view].answers[0].d}
      </label>     
      
      
      
      
    </div>
  )
}

export default Quiz

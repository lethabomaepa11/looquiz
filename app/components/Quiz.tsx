import React from 'react'
import quiz_data from './QuizData';
import ContinueBtn from './ContinueBtn';
import Link from 'next/link';
import Timer from './Timer';



const Quiz = ({view,onClick,prev}: any) => {
  const question = quiz_data[0].questions[view];

  return (
    <div className='w-full items-start card flex-col text-white  pl-5 pt-5'>
      
      <h1 className='btn btn-square btn-ghost w-fit text-2xl mb-10'>{quiz_data[0].topic}</h1>
      <h1 className='text-lg font-bold mb-5'>Question {view+1}</h1>
      <h1 className='text-base'>{question.text}</h1>
     
      <label  className='my-3 btn-ghost btn-square btn px-5 w-fit'><input type='radio' className='radio-primary mr-3' value={question.answers.a} name="answers"/>
       A: {question.answers.a}
      </label>
      
      <label className='my-3 btn-ghost btn-square btn px-5 w-fit'><input type='radio' className='radio-primary mr-3' value={question.answers.a} name="answers"/>
       B: {question.answers.b}
      </label>
            
      <label className='my-3 btn-ghost btn-square btn px-5 w-fit'><input type='radio' className='radio-primary mr-3' value={question.answers.a} name="answers"/>
       C: {question.answers.c}
      </label>

      <label className='my-3 btn-ghost btn-square btn px-5 w-fit'><input type='radio' className='radio-primary mr-3' value={question.answers.a} name="answers"/>
       D: {question.answers.d}
      </label>     
      <div className='flex w-full justify-around'>
        {view > 0 && <button onClick={prev} type='button' className='btn btn-square w-2/5 px-5 btn-error bottom-0 text-white'>Previous</button>}
        
        {((view+1)  == quiz_data[0].questions.length ?
        <button type="button" className='btn btn-square w-2/5 px-5 btn-primary bottom-0' onClick={()=>document.getElementById('my_modal_5').showModal()}>Submit</button>
        :<ContinueBtn onClick={onClick}/>
      )}
        
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

export default Quiz

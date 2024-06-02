'use client'
import Quiz from '@/app/components/Quiz'
import TryQuizPrompt from '@/app/components/TryQuizPrompt'
import {useState,useEffect} from 'react'
import Timer from '@/app/components/Timer'
import ContinueBtn from './ContinueBtn'
import { createQuizResponse, submitQuizResponse } from '../actions/actions'
import { redirect, useRouter } from 'next/navigation'
import Loading from './Loading'


const QuizView = ({quiz,questions}) => {
  const router = useRouter()

  const [view, setview] = useState(-1);
  const [responses,setResponses] = useState([])
  const [submit,setsubmit]  = useState(false)
  const [load,setload] = useState(false)


  function handleContinue(e)
  {
    //console.log("called")
    e.preventDefault()
    if(view>-1){
    const formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    
    form_values.answers != undefined && setResponses(prevResponses => [...prevResponses,(form_values.answers+`(q${view+1})`)])//to know which question this response is for
    
    }
    
    if (submit) {
      setload(true);
      let sub = 0;
      const createId = createQuizResponse.bind(null, quiz.id);
      createId().then(result => {
        responses.forEach(response => {
          let subResponse = submitQuizResponse.bind(null, result);
          subResponse = subResponse.bind(null, response);
          subResponse().then(() => {
            sub++;
  
            // Check if all responses are submitted
            if (sub >= responses.length) {
              // Redirect to the dynamic results page
              router.push(`/results/${result}`);
            }
          });
        });
      });
    }
    
    (view+1)  == questions.length && displayModal()
    //submit = (view+1)  == questions.length?true:false
    
    
    
    !((view+1) == questions.length) && (setview(prevView => 
      {
        
        return (++prevView);
      } 
    ))
    
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
    setsubmit(true)
    document.getElementById('my_modal_5').showModal();
  }
  
  if(load){
    return (<div className='w-screen h-screen justify-center items-center'>
    <Loading/>
  </div>)
}else{
  
  return (
    <div className='flex justify-center items-center'>
      
      
      <form onSubmit={handleContinue} className='w-full md:w-2/4 flex-col justify-between items-center'>
      {view == -1 && <TryQuizPrompt onClick={handleContinue} quiz={quiz} questions={questions}/>}
        {view >= 0 && <Timer time={quiz.timeLimit}
        displayModal={displayModal}
        />}
        {(view >= 0) && <Quiz view={view}
        onClick={handleContinue}
        prev={prevClick}
        displayModal={displayModal}
        quiz={quiz} questions={questions}
        responses={responses}/>}
        <div className='flex w-full justify-around'>
        {view > 0 && <button onClick={prevClick} type='button' className='btn btn-square w-2/5 px-5 btn-error bottom-0 text-white'>Previous</button>}
        
        {((view+1)  == questions.length ?
        <button type="submit" className='btn btn-square w-2/5 px-5 btn-primary bottom-0'>Submit</button>
        :(view!= -1 && <ContinueBtn/>)
      )} 
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">You have completed this quiz!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <div method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button type='submit'>Submit</button>
            </div>
          </div>
        </div>
      </dialog>
      </form>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      
    </div>

  )
}}

export default QuizView

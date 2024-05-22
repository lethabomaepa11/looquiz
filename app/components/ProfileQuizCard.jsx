"use client"
import Link from 'next/link'
import React from 'react'
import { deleteQuiz } from '../actions/actions'
import { usePathname } from 'next/navigation'


const ProfileQuizCard = ({sessionUser,quiz,isLoggedIn}) => {


  const currentPath = usePathname()

  function confirm()
  {
    const del = deleteQuiz.bind(null,quiz.id)
    del().then(() => {
      window.alert("Deleted successfully!")
      window.location.reload()
    })
  }




  return (
    <div className='w-full  h-20 p-2 flex my-2 text-white items-center justify-between rounded-lg hover:bg-cyan-700 cursor-pointer'>
        
        <section className='flex justify-center items-center gap-2'>
        <figure className=' w-14 h-14 rounded-full '><img className='w-full h-full' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <span>
              <h1 className='font-bold text-lg'>{quiz.topic}</h1>
              <p>{quiz.numQuestions} Questions</p>
            </span>
            
            
        </section>
        {!sessionUser?
        <Link href={isLoggedIn ? `quiz/${quiz.id}` :"/login"} className='btn btn-primary text-white px-6'>{isLoggedIn?"Try Quiz":"Login to try quiz"}</Link>:
          <button className='btn btn-error text-white px-6' onClick={()=>document.getElementById(quiz.id).showModal()}>Delete</button>
        }
        <dialog id={quiz.id} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-info">Confirm to delete "<span className='underline text-white'>{quiz.topic}</span>"?</h3>
            <p className="py-4">Press ESC key or click the Cancel below to cancel or click Confirm to delete</p>
            <div className="modal-action">
              <form method="dialog" className='flex w-full justify-center items-center gap-5'>
                <button className="btn btn-primary text-white w-2/4">Cancel</button>
                <button className="w-2/4 btn  btn-error text-white" onClick={confirm}>Confirm</button>
              </form>
            </div>
          </div>
        </dialog>
    </div>
  )
}

export default ProfileQuizCard

"use client"
import Link from 'next/link'
import React from 'react'
import Loading from './Loading'
import { useFormStatus } from 'react-dom'

const Card = ({isLoggedIn,quiz}) => {
  const {pending} = useFormStatus(true)

  if(pending){

      return(
          <Loading/>
      ) 
  }else{
  return (
<div className="card  w-full md:w-72 bg-base-200 lg:bg-base-100 shadow-xl mt-5 md:m-5">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title text-white">
        {quiz.topic}
        <div className="badge badge-secondary">NEW</div>
        </h2>
        <Link href={`/${quiz.author.username}`} className='text-xs text-slate-100 hover:underline'>{quiz.author.username}</Link>
        <p className='text-sm'>{quiz.description}</p>
        <div className="card-actions w-full">
        <Link  href={isLoggedIn ? `quiz/${quiz.id}` :"/login"} className='btn btn-square w-full btn-primary '>{!isLoggedIn && "Login to "}Try this quiz</Link>
        </div>
    </div>
</div>
  )}
}

export default Card

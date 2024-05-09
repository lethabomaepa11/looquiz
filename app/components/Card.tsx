import Link from 'next/link'
import React from 'react'

const Card = ({isLoggedIn}:boolean) => {

  return (
<div className="card  w-full md:w-72 bg-base-200 lg:bg-base-100 shadow-xl mt-5 md:m-5">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title text-white">
        Topic of the Quiz
        <div className="badge badge-secondary">NEW</div>
        </h2>
        <Link href="/j.doe12" className='text-xs text-slate-100 hover:underline'>John Doe</Link>
        <p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions w-full">
        <Link href={isLoggedIn ? "/quiz/quizid":"/login"} className='btn btn-square w-full btn-primary '>{!isLoggedIn && "Login to "}Try this quiz</Link>
        </div>
    </div>
</div>
  )
}

export default Card

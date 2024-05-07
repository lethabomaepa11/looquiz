'use client'
import Link from 'next/link'
import { Router } from 'next/router'
import React from 'react'


const page = () => {
  return (
    <div className='flex justify-center items-center'>
<div className="card  w-full md:w-2/4 bg-base-100  md:m-5">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title text-white">
        Topic of the Quiz
        </h2>
        <Link href="/j.doe12" className='text-xs text-slate-100 hover:underline'>John Doe</Link>
        <p className='text-sm'>Click Continue to attempt this quiz</p>
        <div className="card-actions w-full">
        
        </div>
    </div>
    <div className='flex space-x-2 justify-center items-center'>
      <Link href="/" className='btn btn-square w-2/5 px-5 btn-error bottom-0 text-white'>Cancel</Link>
      <Link href="#" className='btn btn-square w-2/5 px-5 btn-primary bottom-0'>Continue</Link>
    </div>
    
</div>
</div>

  )
}

export default page

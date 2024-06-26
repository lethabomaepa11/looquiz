'use client'
import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/navigation'
import { IoMdArrowRoundBack } from "react-icons/io"
import { logout } from "@/app/actions/actions"


const ProfileCard = ({username,email,sessionUser,quizzes,isLoggedIn}) => {
  //console.log(username)
  return (
    <div className='w-full md:bg-base-300 md:ml-5 card mt-3 md:py-5 h-fit'>
        <section className='flex justify-between items-start'>
          <span className='flex items-center'>
            <IoMdArrowRoundBack
            size={34}
            color='white'
            onClick={useRouter().push("/")}/>
            <h1 className=' text-white text-2xl font-bold  btn btn-ghost btn-square w-fit'>{username}</h1>
          </span>
        
          {sessionUser &&
          <form action={logout}>
            <button className='btn btn-error mr-3'>Logout</button>
          </form>}
          
        </section>
        
        
        <div className='flex items-center justify-around mt-10'>
          <button className="btn btn-lg btn-circle btn-accent ">{String(username).charAt(0).toUpperCase()}</button>

          <div className='flex-col items-center w-3/4 max-w-screen-sm'>
            
            <div className='flex flex-row-reverse items-end justify-around'>
              <label>{quizzes} <p>Quizzes</p></label>
              <label>5 <p>Followers</p></label>
              <label>11 <p>Following</p></label>
            </div>
          </div>
        </div>
        <section className='w-full justify-center items-center'>
          <Link href={`mailto:${email}`}  className='mt-10 ml-10 w-full text-sm hover:text-blue-50 hover:underline'>{email}</Link>
        </section>
        <div className='flex pl-5 w-full mt-5 gap-10'>
        {!sessionUser?
        
          <Link href={isLoggedIn ? `follow` :"/login"} className='btn btn-primary text-white px-10'>{isLoggedIn?"Follow":"Login to follow"}</Link>
          :
          <section>
          <Link href='/create' className="btn btn-primary text-white">
            Create new Quiz
          </Link>
          <button className='btn btn-neutral px-5 ml-4'>Edit Profile</button>
          </section>
        }
        </div>
      </div>
  )
}

export default ProfileCard

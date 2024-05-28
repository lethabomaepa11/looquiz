"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeft, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'
import { GrGithub } from 'react-icons/gr'
import { LiaLinkedin } from 'react-icons/lia'

const About = () => {
    const router = useRouter();
  return (
    <div className='h-screen'>
        
        <div className='flex gap-3 navbar bg-base-200 text-neutral-content'>
            <FaArrowLeft
        onClick={router.back}
        size={25}/>
        <div className="-mx-2 flex-1">
          <Image src="/logoLooQuiz-removebg-preview.png" height={50} width={50} alt="logo"/>
            <a className="btn btn-ghost text-2xl -ml-6">LooQuiz</a>
        </div>
    </div>
    <section className='w-full flex justify-around'>
    <main className='m-5 w-2/3'>
        <h1 className='text-2xl text-white font-bold'>About this project</h1>
        <p>This is a quiz application that allows users to create, delete and try quizzes, any user can try any quiz 
            multiple times, each user will be able to view their results to a specific quiz upon completion, they can also get their
            results in their profile pages, these results are only visible to them.
        </p>
        

    </main>
    <aside className='w-2/6'>
    
        <ul className="menu bg-base-200 w-full rounded-box h-screen">
        <h1 className='menu-title text-2xl text-white font-bold'>Future updates</h1>
        <li><a>Rankings feature integration</a></li>
        <li><a>Allow Users to update their profiles</a></li>
        <li><a>Introduce the OTP method to help with forgotten passwords</a></li>
        <li><a>Use the Authentication services like OAuth and nextAuth</a></li>
        </ul>
    </aside>
    </section>



      <footer className="footer items-center p-4 bg-base-200 text-neutral-content bottom-0 fixed">
  <aside className="items-center grid-flow-col">

      <p>Copyright © 2024 - All right reserved by Loopy/Lethabo Maepa</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <Link href="https://www.facebook.com/lethabo.maepa.332"><FaFacebook size={20}/></Link>
    <Link href="https://www.github.com/lethabomaepa11"><FaGithub size={20}/></Link>
    <Link href="https://www.linkedin.com/in/lethabomaepa11/"><FaLinkedinIn size={20}/></Link>
  </nav>
</footer>
    </div>
  )
}

export default About

import Link from "next/link"
import { CgProfile } from "react-icons/cg"
import { FaPlus } from "react-icons/fa6"
import { BsInfo } from "react-icons/bs"
import { FaGithub } from "react-icons/fa6"
import { Profile } from "@/lib/session"



async function SideNav({isVisible} : any) {
  const user = await Profile()
  return (
    <>
    <div className={`${true?'flex':'hidden'} md:flex hidden`}>
      
      <ul className="menu  md:w-56 w-screen h-screen overflow-y-scroll">
      <h1 className="text-2xl text-white font-bold">Menu</h1>
        <li><Link href='/create'>Create Quiz</Link></li>
        {/*
        <li>
          <details open>
            <summary>Quizzes</summary>
            <ul>
              <li><a>Timed</a></li>
              <li><a>Unlimited time</a></li>
            </ul>
          </details>
        </li>*/}
        <li><Link href={`/${user}`}>Profile</Link></li>
        <li><a>Help</a></li>
        <li><a>About</a></li>
        <li><Link href="https://github.com/lethabomaepa11/looquiz" target="blank">Github</Link></li>
    </ul>
    </div>
    <div className="btm-nav md:hidden z-40">
    <Link href={"/"} className="active">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    <span className="btm-nav-label">Home</span>
  </Link>
  <Link href={user?`/${user}`:"/login"}>
    <CgProfile/>
    <span className="btm-nav-label">Profile</span>
  </Link>
  <Link href={user?"/create":"/login"}>
    <FaPlus/>
    <span className="btm-nav-label">Create Quiz</span>
  </Link>
  <Link href={"/"}>
    <BsInfo/>
    <span className="btm-nav-label">About</span>
  </Link>
  <Link href="https://github.com/lethabomaepa11/looquiz" target="blank">
    <FaGithub/>
    <span className="btm-nav-label">Github</span>
  </Link>
  </div>
    </>
  )
}

export default SideNav

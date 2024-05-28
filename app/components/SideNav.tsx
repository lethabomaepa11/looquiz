import Link from "next/link"
import { CgProfile } from "react-icons/cg"
import { FaPlus } from "react-icons/fa6"
import { BsInfo } from "react-icons/bs"
import { FaGithub } from "react-icons/fa6"
import { Profile } from "@/lib/session"
import { MdOutlineLeaderboard } from "react-icons/md"
import { BiMenu } from "react-icons/bi"
import { GiHelp } from "react-icons/gi"



async function SideNav({isVisible} : any) {
  const user = await Profile()
  return (
    <>
    <div className={`${true?'flex':'hidden'} md:flex hidden`}>
      
      <ul className="menu  md:w-56 w-screen h-screen overflow-y-scroll">
      <h1 className="text-2xl text-white font-bold flex items-center">Menu</h1>
        <li><Link href={user?"/create":'/login'}><FaPlus/>Create Quiz</Link></li>
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
        <li><Link href={user?`/${user}`:"/login"}><CgProfile/>Profile</Link></li>
        <li><Link href={`/${user}`}><MdOutlineLeaderboard/>Rankings</Link></li>
        <li><a><GiHelp/>Help</a></li>
        <li><Link href="/about"><BsInfo/>About</Link></li>
        <li><Link href="https://github.com/lethabomaepa11/looquiz" target="blank"><FaGithub/>Github</Link></li>
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
    <MdOutlineLeaderboard/>
    <span className="btm-nav-label">Rankings</span>
  </Link>
  <Link href={"/about"}>
    <BsInfo/>
    <span className="btm-nav-label">About</span>
  </Link>
  </div>
    </>
  )
}

export default SideNav

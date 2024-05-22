
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { BsPlusCircle } from "react-icons/bs";


function Header({onClick,isVisible,isLoggedIn,username}: any) {
  return (
    <header className="text-white w-full max-h-fit">
        <div className="navbar bg-base-200 ">
        
        <div className="-mx-2 flex-1">
          <Image src="/logoLooQuiz-removebg-preview.png" height={50} width={50} alt="logo"/>
            <a className="btn btn-ghost text-2xl -ml-6">LooQuiz</a>
        </div>
        
        {
          !isLoggedIn ?<div className="flex-none px-5">
        
            <Link className="btn btn-square btn-neutral text-white px-10 mx-3" href="/login">Login</Link>
            <Link className="btn btn-square btn-primary px-10 text-white" href="/signup">Signup</Link>
            </div>
        :
        <div className="lg:flex flex-none px-5">
          
          <Link href='/create' className="btn btn-circle btn-ghost  mr-5  text-white">
          <BsPlusCircle
          size={45}/>
          </Link>
          <Link href={`/${username}`} className="btn btn-circle btn-accent">{String(username).charAt(0).toUpperCase()}</Link>
        </div>
        
        }
        </div>
        
    </header>
  )
}

export default Header;


import Link from "next/link";
import Image from "next/image";

function Header({onClick,isVisible}: any) {
  return (
    <header className="text-white w-full max-h-fit">
        <div className="navbar bg-base-700">
        <div className="flex-none -mx-2 lg:hidden" onClick={onClick}>
          
            <button className="btn btn-square btn-ghost">
            {!isVisible ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              :<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            }
            </button>
          
        </div>
        <div className="-mx-2 flex-1">
          <Image src="/logoLooQuiz-removebg-preview.png" height={50} width={50} alt="logo"/>
            <a className="btn btn-ghost text-xl -ml-6">LooQuiz</a>
        </div>
        <div className="flex-none px-5">
            <Link className="btn btn-square btn-neutral text-white px-10 mx-3" href="/login">Login</Link>
            <Link className="btn btn-square btn-primary px-10 text-white" href="/signup">Signup</Link>
        </div>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
    </header>
  )
}

export default Header;

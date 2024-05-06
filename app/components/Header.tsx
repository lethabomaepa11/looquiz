
import Link from "next/link";

function Header() {
  return (
    <header className="text-white w-full max-h-fit">
        <div className="navbar bg-base-700">
        <div className="flex-none -mx-4 md:hidden">
            <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
        <div className="-mx-3 flex-1">
            <a className="btn btn-ghost text-xl">LooQuiz</a>
        </div>
        <div className="flex-none px-5">
            <Link className="btn btn-square btn-neutral text-white px-10 mx-3" href="/login">Login</Link>
            <Link className="btn btn-square btn-primary px-10 text-white" href="/signup">Signup</Link>
        </div>
        </div>
    </header>
  )
}

export default Header;

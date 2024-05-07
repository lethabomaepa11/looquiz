import Link from "next/link"


function SideNav({isVisible} : any) {
  return (
    <div className={`${isVisible?'flex':'hidden'} lg:flex`}>
      
      <ul className="menu bg-base-200 lg:w-56 w-screen h-screen  rounded-box">
      <h1 className="text-2xl text-white font-bold">Menu</h1>
        <li><a>Available Quizzes</a></li>
        <li>
          <details open>
            <summary>Quizzes</summary>
            <ul>
              <li><a>Timed</a></li>
              <li><a>Unlimited time</a></li>
            </ul>
          </details>
        </li>
        <li><a>About</a></li>
        <li><Link href="https://github.com/lethabomaepa11/looquiz">Github</Link></li>
    </ul>
    </div>
  )
}

export default SideNav

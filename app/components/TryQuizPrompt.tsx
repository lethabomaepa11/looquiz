import Link from "next/link"
import ContinueBtn from "./ContinueBtn"

const TryQuizPrompt = ({onClick}: any) => {
  return (
    <div className="card  w-full bg-base-100  md:m-5">
        
        <figure className='flex-col justify-center items-center'>
        <h2 className="card-title text-white my-2 ">
            Topic of the Quiz
          </h2>
          <img className='w-4/5 rounded-lg' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
        
            <Link href="/j.doe12" className='text-xs text-slate-100 hover:underline'>John Doe</Link>
            <p className='text-sm'>Click Continue to attempt this quiz.</p>
            <div className="card-actions w-full">
            
            </div>
            
        </div>
      <div className='flex space-x-2 justify-center items-center'>
        <Link href="/" className='btn btn-square w-2/5 px-5 btn-error bottom-0 text-white'>Cancel</Link>
        <ContinueBtn onClick={onClick}/>
        {/*When the continue btn is clicked, re-render and show quizzes, until final quiz */}
      </div>
    
    </div>
  )
}

export default TryQuizPrompt

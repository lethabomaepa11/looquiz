import Link from "next/link"
import ContinueBtn from "./ContinueBtn"

const TryQuizPrompt = ({onClick,quiz}: any) => {
  
  return (
    <div className="card  w-full bg-base-100  md:m-5">
        
        <figure className='flex-col justify-center items-center'>
        <h2 className="card-title text-white my-2 ">
            {quiz.topic}
          </h2>
          <img className='w-4/5 rounded-lg' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
        
            <Link href={`/${quiz.author.username}`} className='text-xs text-slate-100 hover:underline'>{quiz.author.username}</Link>
        
            <p className='text-sm'>{quiz.numQuestions} Question{quiz.numQuestions>1&&"s"}<br/>Click <b className="text-white">Continue</b> to attempt this quiz.{/**if this is timed quiz, it'll tell here */}
            This is a timed Quiz limited to <b className="text-white">{quiz.timeLimit} minute</b>, should <b className="text-white">{quiz.timeLimit} minute</b> pass, you will be redirected to the homepage or the starting point
            and your work will be automatically submitted and graded</p>
            <div className="card-actions w-full">
            
            </div>
            
        </div>
      <div className='flex space-x-2 justify-center items-center'>
        <Link href="/" className='btn btn-square w-2/5 px-5 btn-error bottom-0 text-white'>Cancel</Link>
        <ContinueBtn/>
        {/*When the continue btn is clicked, re-render and show quizzes, until final quiz */}
      </div>
    
    </div>
  )
}

export default TryQuizPrompt

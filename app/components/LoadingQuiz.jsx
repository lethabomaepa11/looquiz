import React from 'react'
import Loading from './Loading'

const LoadingQuiz = () => {
  return (
    <div className='flex flex-col h-full w-full justify-center items-center'>
        <Loading/>
        <div className='w-full flex gap-5 justify-center items-center mt-10 flex-wrap'>

            
  {[...Array(4)].map((_, index) => (
    <React.Fragment key={index}>
        <div className="flex flex-col gap-4 w-52">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      </div>
    </React.Fragment>
  ))}
    </div>
</div>
  )
}

export default LoadingQuiz

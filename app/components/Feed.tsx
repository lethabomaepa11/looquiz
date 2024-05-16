import React from 'react'
import Card from './Card'

const Feed = ({isLoggedIn}: any) => {
  return (
    <div className='lg:rounded-box overflow-hidden w-screen h-screen lg:bg-base-200 lg:ml-2 mx-4 '>
        <h1 className='text-2xl my-5 text-white font-bold ml-3'>Available Quizzes</h1>
        <main className='overflow-y-scroll flex flex-wrap h-screen pb-20'>
            <Card 
            isLoggedIn={isLoggedIn}/>
            <Card
            isLoggedIn={isLoggedIn}/>
            <Card
            isLoggedIn={isLoggedIn}/>
            <Card
            isLoggedIn={isLoggedIn}/>
            <Card
            isLoggedIn={isLoggedIn}/>
        </main>
    </div>
  )
}

export default Feed

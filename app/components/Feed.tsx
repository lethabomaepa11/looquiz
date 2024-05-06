import React from 'react'
import Card from './Card'

const Feed = () => {
  return (
    <div className='lg:rounded-box w-screen h-screen lg:bg-base-200 lg:ml-2 m-4'>
        <h1 className='text-2xl my-5 '>Available Quizzes</h1>
        <main className='overflow-y-scroll flex flex-wrap h-screen'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </main>
    </div>
  )
}

export default Feed

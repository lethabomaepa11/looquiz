import React from 'react'

const Loading = () => {
  return (
    <main className="flex z-10 justify-center items-center">
        <p>Loading, please wait...</p>
        <span className="loading loading-infinity loading-lg h-2/4 bg-primary"></span>
    </main>
  )
}

export default Loading

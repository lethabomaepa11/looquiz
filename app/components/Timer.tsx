'use client'
import {useState}from 'react'

const Timer = ({time}: any) => {

    const [timeRemaining, setTimeRemaining] = useState(time*6000)//60seconds for a minute
    setInterval( () =>
    {
        let current = (timeRemaining/time)*100;

        setTimeRemaining(prevtime => {
            return (prevtime-1000)
        })
        //document.getElementById("timer").style.width = `${current}%`;
        console.log(current);
    },1000)
  return (
    <div className='btn-square btn-ghost w-full rounded-2xl h-10 bg-base-300'>
        <div id="timer" className='w-2/4 rounded-2xl h-10 bg-blue-500'>
        </div>
      </div>
  )
}

const styles = 
{
    width: 0,
}

export default Timer

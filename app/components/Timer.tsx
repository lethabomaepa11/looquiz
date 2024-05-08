'use client'
import { useRouter } from 'next/navigation';
import {useState, useEffect}from 'react';

const Timer = ({time}: any) => {

    


  const [seconds, setSeconds] = useState(0);

    const router = useRouter();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
      seconds == time*60 && router.push("/")
      document.getElementById("timer").style.width =`${(seconds/(time*60))*100}%`
    }, 1000);

    //
    return () => {
        clearInterval(intervalId);
        
        };
        });

  return (
    <div className='btn-square btn-ghost w-full rounded-2xl h-10 bg-base-300 overflow-hidden'>
        <div id="timer" className='rounded-2xl h-10 bg-blue-500'>
        </div>
      </div>
  )
}

const styles = 
{
    width: 0,
}

export default Timer

'use client'
import { useRouter } from 'next/navigation';
import {useState, useEffect}from 'react';
import Link from 'next/link';

const Timer = ({time,displayModal}: any) => {

    


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
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* The button to open modal */}
        <label htmlFor="my_modal_7" className="btn">open modal</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">This modal works with a hidden checkbox!</p>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
      </div>
      
  )
}

const styles = 
{
    width: 0,
}

export default Timer

import React from 'react'
import { useEffect, useState } from 'react'

const Timer = ({targetDate}) => {
    const [timeleft, setTimeleft] = useState(0);
    useEffect(()=>{
        const updateTimer = ()=>{
            const difference = new Date(targetDate) - new Date();
             if(difference <= 0){
                setTimeleft(0)
                return;
            }
            setTimeleft(difference);
        }
        updateTimer();
        const timer = setInterval(updateTimer, 1000);
        return ()=> clearInterval(timer);
    }, [targetDate])

    const hours = Math.floor(timeleft/(1000 * 60 * 60));
    const minutes = Math.floor((timeleft/(1000 *60)) % 60)
    const seconds = Math.floor((timeleft/1000) % 60);
  return (
    <div>
        {timeleft === 0 ? (<div><button className='active:scale-95 cursor-pointer  bg-red-500 px-3 py-1 rounded-xl'>Time's Up!</button></div>) : (<div><button className='bg-green-600 px-3 py-1 rounded-xl cursor-pointer active:scale-95'>{hours}h : {minutes}m : {seconds}s Left</button></div>)}
    </div>
  )
}

export default Timer
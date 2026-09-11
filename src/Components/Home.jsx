import React from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react';
import Notask from './Notask';
import Task from './Task';

const Home = (props) => {
  return (
    <div className='flex items-center flex-col p-3'>
        <h1 className='text-4xl font-semibold mb-8'>To-Do-App</h1>
        <div className='w-[95%] md:w-[60%] flex  flex-col rounded-2xl p-3'>
          {props.tasks.length > 0? props.tasks.map((task,index)=>{
            return <Task key={index} task={task} index={index} deleteTask={props.deleteTask}/>
          }) : <Notask/>}
        </div>
        <div className='absolute bottom-6 right-6'>
            <button className='bg-[#7D5BA6] rounded-4xl p-3 transition duration-300 ease-in-out hover:scale-110 '>
                <Link to='/addtask' className='text-white'><Plus size={36} strokeWidth={1.75} /></Link>
            </button>
        </div>
    </div>
  )
}

export default Home
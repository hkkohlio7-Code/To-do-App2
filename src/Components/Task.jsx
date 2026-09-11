import { X } from 'lucide-react'
import Timer from './Timer'

const Task = ({task, index, deleteTask}) => {
  console.log(task)
  return (
    <div className=' bg-pink-600 px-5 py-3 rounded-3xl mt-5 text-gray-100 shadow-2xl'>
        <div className='flex justify-between'>
              <h1 className='text-xl font-semibold border-b-2 mb-2'>{task.title}</h1>
              <button 
                className='bg-red-500 p-1 rounded-full active:scale-90'
                onClick={()=>{
                  deleteTask(index);
                }}
              >
                <X />
              </button>
        </div>
        <div >
          <p className='break-all'>{task.detail}</p>
          <div className='flex justify-between mt-3 items-center'>
            <button className='bg-[#818021] px-3 py-1 rounded-xl text-medium active:scale-95'>{task.category}</button>
            <Timer targetDate={task.datetime}/>
          </div>
        </div>
            
      </div>
  )
}

export default Task
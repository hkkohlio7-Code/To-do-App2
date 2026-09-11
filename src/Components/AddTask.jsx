import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTask = (props) => {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [category, setCategory] = useState('');
    const [datetime, setDatetime] = useState('');
    const navigate = useNavigate();
    const submitHandler =(e)=>{
        e.preventDefault();

        if(!datetime || new Date(datetime) <= new Date()){
            alert('please Select an apropriate Date & Time');
            
            return;
        }
        if(title === ''){
            alert('Please enter The title');
            return;
        }
        if(detail === ''){
            alert('Please Mention Details');
            return;
        }
        if(category === ''){
            alert('Please Select a Category');
            return;
        }

        
        const newTask= {
            title: title,
            detail: detail,
            category: category,
            datetime: datetime
        }
        props.addTask(newTask);
        
        setTitle('');
        setDetail('');
        setCategory('');
        setDatetime('');
        navigate('/')


    }
  return (
    <div className='p-3 flex flex-col gap-20 items-center  h-screen'>
        <h1 className='text-4xl font-semibold'>Create Your Task</h1>
        <form 
            className='bg-[#89CE94] h-[75%] rounded-2xl p-3 flex flex-col gap-5 w-[90%] md:w-[38%]'
            onSubmit={submitHandler}
        >
            <input 
                className='outline-none bg-[#7347aa] p-3 text-[#89CE94] text-xl rounded-xl  h-16'
                type='text' 
                placeholder='Type your task' 
                value={title}
                onChange={(e)=>{
                    setTitle(e.target.value);
                }}
            />
            <textarea 
            className='border-black outline-none bg-[#7347aa] rounded-xl p-2 h-60 text-xl text-[#89CE94]'
                placeholder='Write Details'
                value={detail}
                onChange={(e)=>{
                    setDetail(e.target.value);
                }}
            />
            <select 
                className='outline-none bg-[#7347aa] text-[#89CE94] p-3 rounded-2xl' 
                value={category}
                onChange={(e)=>{
                    setCategory(e.target.value)
                }}
            >
                <option value={''} disabled>Select Category</option>
                <option value={'Gym 🏋️'}>Gym 🏋️</option>
                <option value={'Home 🏠'}>Home 🏠</option>
                <option value={'Study 📚'}>Study 📚</option>
                <option value={'Relationship ❤️'}>Relationship ❤️</option>
                <option value={'Project 💻'}>Project 💻</option>
            </select>
            <input 
                type='datetime-local' 
                className='bg-[#7347aa] p-3 rounded-2xl outline-none'
                value={datetime}
                onChange={(e)=>{
                    setDatetime(e.target.value)
                }}
            />
            <button 
                className='bg-amber-700 p-3 rounded-2xl text-center'
                type='submit'
            >
                Add Task
            </button>
        </form>
    </div>
  )
}

export default AddTask
import { Route, Routes} from 'react-router-dom'
import AddTask from './Components/AddTask'
import Home from './Components/Home'
import { useEffect ,useState } from 'react'
const App = () => {
  const [tasks, setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks): [];
  });

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }, [tasks])
  const addTask = (newTask)=>{
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (index) => {
    const copyTask =[...tasks];
    copyTask.splice(index, 1);
    setTasks(copyTask);
  }
  return (
    <div id='main' className='bg-[#643173] min-h-screen overflow-auto overflow-x-hidden'>
        <Routes>
          <Route path='/' element={<Home tasks={tasks} deleteTask={deleteTask}/>}/>
          <Route path='/addtask' element={<AddTask addTask={addTask}/>}/>
        </Routes>
        
    </div>
  )
}

export default App
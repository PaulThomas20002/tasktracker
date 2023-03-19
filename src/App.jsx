import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'


export default function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text : 'Doctors Appointment',
        day : 'Feb 5th at 2:30pm',
        reminder : true,
    },
    {
        id: 2,
        text : 'Meeting at School',
        day : 'Feb 6th at 01:30pm',
        reminder : true,
    },
    {
        id: 3,
        text : 'Food Shopping',
        day : 'Feb 6th at 2:30pm',
        reminder : false,
    },
])

//delete task

const deleteTask = (id) => {
  console.log('delete',id)
  setTasks(tasks.filter((task)=> task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  console.log(id)
  setTasks(tasks.map((task) => task.id === id ? { ...task,reminder: !task.reminder }:task))
}


const addTask = (task) => {
  console.log(task);
  const id = Math.floor(Math.random() * 121) + 1
  const newTask = {id, ...task }
  setTasks([...tasks, newTask])
}

  return (
    
    <div className="container">
    <Header onAdd={ (e) => setShowAddTask(!showAddTask) }showAdd={showAddTask}/>
    
    {showAddTask && <AddTask onAdd={addTask}/>}

    {
    tasks.length > 0 ? 
    (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> )
    : 
    ('No Tasks')
    }
    </div>
  )
}
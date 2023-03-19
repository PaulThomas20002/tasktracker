import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

export default function App() {
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

  return (
    
    <div className="container">
    <Header />
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : ('No Tasks') }
  </div>
  )
}

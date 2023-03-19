
import Task from './Task'
/*
export default function Tasks() {
  return (
    <> 
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))} 
    </>
  )
}
*/

export default function Tasks({tasks, onDelete }) {
  return (
    <div>
        {tasks.map((task)=>(
            <Task key={task.id} task={task} onDelete= {onDelete}/>
        ))}

    </div>
  )
}

import Task from './Task'

export default function Tasks({tasks, onDelete, onToogle }) {
  return (
    <div>
        {tasks.map((task)=>(
            <Task key={task.id} task={task} onDelete={onDelete} onToogle={onToogle}/>
        ))}

    </div>
  )
}
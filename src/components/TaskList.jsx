import React from 'react'

export default function TaskList({tasks, onComplete}){

    return(
        <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" onChange={() => onComplete(task.id)}/>
            {task.name}
          </li>
        ))}
        </ul>

    )

}

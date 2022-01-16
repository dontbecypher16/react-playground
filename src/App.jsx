import React from "react";

export default function App() {
    const tasks = [
        'Take dog for walk',
        'Buy milk',
        'Call mom',
        'Mow lawn',
        'Pay rent',
        'Get gas'
    ];
    
    return (
        <>
            <h1>Todo App</h1>
            <ul>
                {tasks.map(task => <li key={task}>{task}</li>)}
            </ul>
        </>
    )
}

import React from "react";

export default function AddTask({onSubmit}) {

  function handleSubmit(event){
    event.preventDefault();
    const text = event.target.taskName.value;
    onSubmit(text);
    event.target.taskName.value = ''

  }
    return (
        <form className="center-all" onSubmit={handleSubmit}>
          <input
            type="text"
            name="taskName"
            placeholder="enter a task"
          />
          <button>add task</button>
        </form>
    )
}
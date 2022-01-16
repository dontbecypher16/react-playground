import React from "react";

export default function AddTask({handleSubmit, handleChange, value}) {
    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="taskName"
            placeholder="enter a task"
            onChange={handleChange}
            value={value}
          />
          <button>add task</button>
        </form>
    )
}
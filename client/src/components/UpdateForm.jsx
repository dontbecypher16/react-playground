import React from "react"


export default function UpdateForm({onUpdate}) {

      return (
          <form onSubmit={() => this.props.onUpdate()}>
            <input
              type="text"
              name="taskName"
              placeholder="enter task..."
            />
            <button>update task</button>
          </form>
      )
  }

import React from "react"


export default function UpdateForm(onName) {

      return (
          <form onName={() => this.props.onName()}>
            <input
              type="text"
              name="taskName"
              placeholder="enter task..."
            />
            <button>update task</button>
          </form>
      )
  }

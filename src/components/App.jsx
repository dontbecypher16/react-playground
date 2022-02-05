import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  state = {
    tasks: [
      { id: uuid(), name: "Take dog for walk", isCompleted: false },
      { id: uuid(), name: "Buy milk", isCompleted: false },
      { id: uuid(), name: "Call mom", isCompleted: false },
      { id: uuid(), name: "Mow lawn", isCompleted: false },
      { id: uuid(), name: "Pay rent", isCompleted: false },
      { id: uuid(), name: "Get gas", isCompleted: false },
    ]
  };

  handleSubmit(name) {
    const newTask = {
      id: uuid(),
       name,
       isCompleted: false

    }

    this.setState(
      (prevState) => ({
        tasks: [newTask, ...prevState.tasks],
      })

    );
  }

    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
      )
    }));
  }

  render() {
    return (
      <>
        <h1>Todo App</h1>
        <AddTask
          onSubmit={this.handleSubmit}
        />

        {/* TaskList */}
      </>
    );
  }
}

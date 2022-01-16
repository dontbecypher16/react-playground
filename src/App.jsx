import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import uuid from "react-uuid";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    ],
    newTask: "",
  };

  handleSubmit(event) {
    event.preventDefault();

    this.setState(
      // to update exist state, use prevState callback function
      // do NOT use this.state, because it can be out of sync
      (prevState) => ({
        // update the existing tasks with our new task
        tasks: [this.state.newTask, ...prevState.tasks],

        // clear the input, because it looks nice
        newTask: "",
      })

      // arrow functions can be explicitly returned
      // this is how to explicitly return an object
      // () => {
      //     return {
      //         asdf: "asdf"
      //     }
      // }

      // they can also be implicitly returned
      // this is how to implicitly return an object: ({})
      // () => ({
      //     asdf: "asdf"
      // })
    );
  }

  handleChange(event) {
    console.log(this);
    // when we are overriding not updating existing state, we don't need a callback
    this.setState({ newTask: event.target.value });
  }

  handleCheckbox(id) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    }));
  }

  render() {
    return (
      <>
        <h1>Todo App</h1>
        <AddTask
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.newTask}
        />

        {/* TaskList */}
        <TaskList tasks={this.state.tasks} onComplete={this.handleCheckbox} />
      </>
    );
  }
}

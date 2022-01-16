import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    tasks: [
      "Take dog for walk",
      "Buy milk",
      "Call mom",
      "Mow lawn",
      "Pay rent",
      "Get gas",
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

  render() {
    return (
      <>
        <h1>Todo App</h1>
        {/* add new task form */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="taskName"
            placeholder="enter a task"
            onChange={this.handleChange}
            value={this.state.newTask}
          />
          <button>add task</button>
        </form>

        {/* TaskList */}
        <ul>
          {this.state.tasks.map((task) => (
            <li key={task}>
              <input type="checkbox" />
              {task}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

import React from "react";
import uuid from "react-uuid";
import "../index.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import DeleteTask from "./DeleteTask";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }

  state = {
    tasks: [
      // { id: uuid(), name: "Take dog for walk", isCompleted: false },
      // { id: uuid(), name: "Buy milk", isCompleted: false },
      // { id: uuid(), name: "Call mom", isCompleted: false },
      // { id: uuid(), name: "Mow lawn", isCompleted: false },
      // { id: uuid(), name: "Pay rent", isCompleted: false },
      // { id: uuid(), name: "Get gas", isCompleted: false },
    ],
  };

  async componentDidMount(){
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const todos = await response.json()
      this.setState({
        tasks: todos.map(({id, title, completed}) => ({
          id: id,
          name: title,
          isCompleted: completed
        }))
      })

    } catch(error){
      console.error(error)
    }
  }

  handleSubmit(name) {
    const newTask = {
      id: uuid(),
      name,
      isCompleted: false,
    };

    this.setState((prevState) => ({
      tasks: [newTask, ...prevState.tasks],
    }));
  }

  handleCheckbox(isCompleted, id) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted } : task
      ),
    }));
  }

  handleDelete(id){
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => 
        task.id !== id

      )

    }))
    //alert("testing delete")
  }

  render() {
    return (
      <>
        <h1>Todo App</h1>
        <AddTask onSubmit={this.handleSubmit} />

        
        <TaskList
          tasks={this.state.tasks}
          onChangeStatus={this.handleCheckbox}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

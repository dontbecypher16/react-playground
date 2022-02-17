import React from "react";
import uuid from "react-uuid";
import "../index.css";
import InputForm from "./InputForm";
import TaskList from "./TaskList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  state = {
    tasks: [
      { id: uuid(), title: "Take dog for walk", isCompleted: false },
      { id: uuid(), title: "Buy milk", isCompleted: false },
      { id: uuid(), title: "Call mom", isCompleted: false },
      { id: uuid(), title: "Mow lawn", isCompleted: false },
      { id: uuid(), title: "Pay rent", isCompleted: false },
      { id: uuid(), title: "Get gas", isCompleted: false },
    ],
  };

  // async componentDidMount(){
  //   try{
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //     const todos = await response.json()
  //     this.setState({
  //       tasks: todos.map(({id, title, completed}) => ({
  //         id: id,
  //         title: title,
  //         isCompleted: completed
  //       }))
  //     })

  //   } catch(error){
  //     console.error(error)
  //   }
  // }

  handleSubmit(title) {
    const newTask = {
      id: uuid(),
      title,
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

    }));
    
  }

  handleEdit(id, title){
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? {...task, title} : task
      )
    }));

  }

  render() {
    return (
      <>
        <h1 className="center-all">Todo List</h1>
        <div className="add task">
        <InputForm onSubmit={this.handleSubmit} buttonText="add task" placeHolder="enter a task"/>
        </div>
        <TaskList
          tasks={this.state.tasks}
          onChangeStatus={this.handleCheckbox}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />
      </>
    );
  }
}

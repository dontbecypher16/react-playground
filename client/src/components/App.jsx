import React from "react";
import "../index.css";
import {createTodo, deleteTodo, getAllTodos, updateTodo} from "../api"
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
    tasks: [],
  };

  async componentDidMount(){
    try{
      const tasks = await getAllTodos()
      this.setState({
        tasks: tasks
      })

    } catch(error){
      console.error(error)
    }
  }

  async handleSubmit(title) {
    try{
      const newTask = await createTodo({title})
      this.setState((prevState) => ({
        tasks: [newTask, ...prevState.tasks],
      }));

    }catch(e){
      console.error(e)
    }
  }

  async handleCheckbox(isCompleted, id) {
    try{
      await updateTodo({id, isCompleted})
      this.setState((prevState) => ({
        tasks: prevState.tasks.map((task) =>
          task.id === id ? { ...task, isCompleted } : task
        ),
      }));

    }catch(e){
      console.log(e)
    }
  }

  async handleDelete(id){
    try{
      await deleteTodo(id)
      this.setState((prevState) => ({
        tasks: prevState.tasks.filter((task) => 
          task.id !== id
  
        )
  
      }));

    }catch(e){
      console.log(e)
    }
    
  }

  async handleEdit(id, title){
    console.log(id, title)
    try{
      await updateTodo({id, title})
      this.setState((prevState) => ({
        tasks: prevState.tasks.map((task) =>
          task.id === id ? {...task, title} : task
        )
      }));

    }catch(e){
      console.error(e)

    }

  }

  render() {
    return (
      <div className="page">
        <h1 className="center-all">Todo List</h1>
        <div className="add-task">
          <InputForm onSubmit={this.handleSubmit} buttonText="add task" placeHolder="enter a task"/>
        </div>
        <TaskList
          tasks={this.state.tasks}
          onChangeStatus={this.handleCheckbox}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />
      </div>
    );
  }
}

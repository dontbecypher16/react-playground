import React from "react";
import IconButton from "./IconButton";
import InputForm from "./InputForm";
export default class TaskList extends React.Component {
  state = {
    idToEdit: null,
  };

  showUpdateForm(id) {
    this.setState({
      idToEdit: id,
    });
  }

  handleUpdate(id, title){
    this.props.onEdit(id, title)
    this.setState({
      idToEdit: null,
    });  
  }

  render() {
    return (
      <ul className="center-all">
        {this.props.tasks.map((task) => (
          <li className="list-item" key={task.id}>
            {task.id === this.state.idToEdit ? (
              <InputForm onSubmit={(title) => this.handleUpdate(task.id, title)} buttonText="update task" value={task.title}/>
            ) : (
              <>
                <input
                  type="checkbox"
                  onChange={(event) =>
                    this.props.onChangeStatus(event.target.checked, task.id)
                  }
                />
                {task.title}{" "}
                <IconButton onClick={() => this.showUpdateForm(task.id)} icon="✍🏻" />{" "}
                <IconButton onClick={() => this.props.onDelete(task.id)} icon="🗑️" />
              </>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

import React from "react";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";
export default class TaskList extends React.Component {
  render() {
    
    return (
      <ul>
        {this.props.tasks.map((task) => (
          <li className="list-item" key={task.id}>
            <input
              type="checkbox"
              onChange={(event) =>
                this.props.onChangeStatus(event.target.checked, task.id)
              }
            />
            {task.name}
            {" "}
            <EditTask onEdit={() => this.props.onEdit(task.id)}/>
            {" "}
            <DeleteTask onDelete={() => this.props.onDelete(task.id)}/>
          </li>
        ))}
      </ul>
    );
  }
}

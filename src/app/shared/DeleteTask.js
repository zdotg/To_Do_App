import React from "react";

function DeleteTask(props) {
  const { tasks, onDelete } = props;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.description}</span>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default DeleteTask;

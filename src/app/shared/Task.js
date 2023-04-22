import React from "react";

function task(props) {
  const { task, onComplete } = props;

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onComplete(task.id)}
      />
      <span className={task.completed ? "completed" : ""}>
        {task.description}
      </span>
    </div>
  );
}

export default task;

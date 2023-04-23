import React from "react";

function Task(props) {
  const { description, completed, onComplete } = props;

  if (!completed) {
    return null;
  }

  return (
    <div className="task">
      <input type="checkbox" checked={completed} onChange={onComplete} />
      <span className={completed ? "completed" : ""}>{description}</span>
    </div>
  );
}

export default Task;

import React from "react";
import Task from "./Task";

function RenderTask(props) {
  const { tasks, onComplete } = props;

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onComplete={onComplete} />
      ))}
    </div>
  );
}

export default RenderTask;

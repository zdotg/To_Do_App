import React, { useState } from "react";

function TaskForm(props) {
  const { onSubmit } = props;
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ description });
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;

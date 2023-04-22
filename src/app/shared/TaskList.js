import React from "react";
import Task from "./Task";
import DeleteTask from "./DeleteTask";
import TaskForm from "./TaskForm";

function TaskList({ tasks }) {
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task description={task.description} />
            <DeleteTask id={task.id} onDelete={handleDeleteTask} />
          </li>
        ))}
      </ul>
      <TaskForm onAdd={handleAddTask} />
    </div>
  );
}

export default TaskList;

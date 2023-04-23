import React from "react";
import Task from "./Task";
import DeleteTask from "./DeleteTask";
import TaskForm from "./TaskForm";

function TaskList({ tasks, onAddTask, setTasks }) {
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              description={task.description}
              completed={task.completed}
              onComplete={() => handleCompleteTask(task.id)}
            />
            <DeleteTask id={task.id} onDelete={handleDeleteTask} />
          </li>
        ))}
      </ul>
      <TaskForm onSubmit={onAddTask} />
    </div>
  );
}

export default TaskList;

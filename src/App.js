import React, { useState } from "react";
import "./App.css";
import TaskList from "./app/shared/TaskList";
import Header from "./app/shared/Header";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    const taskWithDefaults = {
      ...newTask,
      id: tasks.length + 1,
      completed: false,
    };
    setTasks([...tasks, taskWithDefaults]);
    console.log(newTask);
  };

  return (
    <div className="container">
      <Header />
      <TaskList tasks={tasks} onAddTask={handleAddTask} setTasks={setTasks} />
    </div>
  );
}

export default App;

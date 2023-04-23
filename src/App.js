import React, { useState } from "react";
import "./App.css";
import TaskList from "./app/shared/TaskList";
import Header from "./app/shared/Header";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
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

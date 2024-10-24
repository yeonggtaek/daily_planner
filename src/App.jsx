import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <h1>Daily Planner</h1>
      <div className="task-form">
        <TaskForm onSubmit={(task) => setTasks([...tasks, task])} />
      </div>
      <div>
      <h2>You have {tasks.filter((t) => !t.completed).length} tasks remaining:</h2>
        </div>
      <ul className="tasks">
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onComplete={(taskId, completed) => {
              setTasks((prev) =>
                prev.map((t) => {
                  if (t.id === taskId) {
                    t.completed = completed;
                  }
                  return t;
                })
              );
            }}
            onDelete={(taskId) => {
              setTasks((prev) => prev.filter((t) => t.id !== taskId));
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

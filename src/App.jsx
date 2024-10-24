import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const filterOptions = ["All", "Completed", "Pending"];
  const [filter, setFilter] = useState(filterOptions[0]);

  return (
    <div className="app">
      <h1>Daily Planner</h1>
      <div className="task-form">
        <TaskForm onSubmit={(task) => setTasks([...tasks, task])} />
      </div>
      <div className="filter-button-group">
        {filterOptions.map((opt) => {
          return (
            <button
              key={opt}
              className="filter-button"
              onClick={() => setFilter(opt)}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <div>
        <h2>
          You have {tasks.filter((t) => !t.completed).length} tasks remaining:
        </h2>
      </div>
      <ul className="tasks">
        {tasks
          .filter((task) => {
            if (filter === filterOptions[0]) return true;
            else if (filter === filterOptions[1]) {
              return task.completed;
            } else {
              return !task.completed;
            }
          })
          .map((task) => {
            console.log("task:", task);
            return (
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
            );
          })}
      </ul>
    </div>
  );
}

export default App;

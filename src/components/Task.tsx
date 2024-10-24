import React from "react";

export const Task = ({ task, onComplete, onDelete }) => {
  return (
    <li className="task" key={task.id}>
      <label>
        <input
          className="complete-checkbox"
          type="checkbox"
          checked={task.completed}
          onChange={(e) => {
            onComplete(task.id, e.target.checked);
          }}
        />
        <span className={task.completed ? "strike" : ""}>{task.value}</span>
      </label>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        remove
      </button>
    </li>
  );
};

import React from "react";
import "./Task.css";


export const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = React.useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          id: parseInt((Math.random() * 100).toString(), 10),
          value: task,
          completed: false,
        });
        setTask("");
      }}
    >
      <input
        className="add-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-button" type="submit">
        save
      </button>
    </form>
  );
};

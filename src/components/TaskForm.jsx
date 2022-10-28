import React from "react";
import { useState } from "react";
import { useTaskContext } from "./provider/TaskProvider";

const Taskform = () => {
  const { addTask } = useTaskContext();
  const [task, setTask] = useState("");

  function handleChange(e) {
    const inputText = e.target.value;
    setTask(inputText);
  }

  function submit(e) {
    e.preventDefault();
    if (!task) {
      return;
    }
    const newTask = {
      id: Math.random(),
      completed: false,
      task: task,
    };
    addTask(newTask);
    setTask("");
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="add todo..."
        onChange={handleChange}
        value={task}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Taskform;

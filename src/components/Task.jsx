import React from "react";
import { useTaskContext } from "./provider/TaskProvider";

const Task = ({ item }) => {
  const { toggleCompleted } = useTaskContext();
  return (
    <div
      className="task"
      style={{ textDecoration: item.completed === true && "line-through" }}
    >
      <input
        type="checkbox"
        checked={item.completed}
        onChange={(e) => toggleCompleted(e.target.id)}
        id={item.id}
      />
      {item.task}
    </div>
  );
};

export default Task;

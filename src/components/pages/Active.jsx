import React from "react";
import TaskForm from "../TaskForm";
import Task from "../Task";
import { useTaskContext } from "../provider/TaskProvider";

const Active = () => {
  const { taskList } = useTaskContext();

  const active = taskList.filter((item) => item.completed !== true);

  return (
    <>
      <TaskForm />
      {active.map((item) => {
        return <Task key={item.id} item={item} />;
      })}
    </>
  );
};

export default Active;

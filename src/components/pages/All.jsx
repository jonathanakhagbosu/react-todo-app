import React from "react";
import TaskForm from "../TaskForm";
import Task from "../Task";
import { useTaskContext } from "../provider/TaskProvider";

const All = () => {
  const { taskList } = useTaskContext();
  return (
    <>
      <TaskForm />
      {taskList.map((item) => {
        return <Task key={item.id} item={item} />;
      })}
    </>
  );
};

export default All;

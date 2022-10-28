import React from "react";
import Task from "../Task";
import { useTaskContext } from "../provider/TaskProvider";

const Completed = () => {
  const { taskList, deleteTask, deleteAll } = useTaskContext();

  const completed = taskList.filter((item) => item.completed === true);

  return (
    <div className="completed">
      {completed.map((item) => {
        return (
          <div className="completed-task" key={item.id}>
            <Task item={item} />
            <button onClick={(e) => deleteTask(e.target.id)} id={item.id}>
              delete task
            </button>
          </div>
        );
      })}
      <button className="delete-all" onClick={deleteAll}>
        delete all
      </button>
    </div>
  );
};

export default Completed;

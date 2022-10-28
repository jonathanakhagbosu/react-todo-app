import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();
export const useTaskContext = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  const toggleCompleted = (id) => {
    const idNum = Number(id) || id;
    setTaskList((prevItems) => {
      const newTasks = prevItems.map((item) => {
        if (item.id === idNum) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
      return newTasks;
    });
  };

  const deleteTask = (id) => {
    const numId = Number(id) || id;
    setTaskList((prevItems) => {
      return prevItems.filter((item) => item.id !== numId);
    });
  };

  const deleteAll = () => {
    setTaskList((prevItems) => {
      return prevItems.filter((item) => item.completed !== true);
    });
  };

  return (
    <TaskContext.Provider
      value={{ taskList, addTask, toggleCompleted, deleteTask, deleteAll }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

import { useState } from "react";
import Footer from "./footer/Footer.jsx";
import Header from "./header/Header.jsx";
import TaskInput from "./taskInput/TaskInput.jsx";
import TaskList from "./TaskList/TaskList.jsx";
import { useEffect } from "react";
export default function TaskContainer() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTask = localStorage.getItem("taskList");
    if (storedTask) {
      setTaskList(JSON.parse(storedTask));
    }
  }, []);

  const saveTasksToLocalStrorage = (taskList) => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  };

  const addTask = (title) => {
    const newTask = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    };
    const updatedTask = [...taskList, newTask];
    setTaskList(updatedTask);
    saveTasksToLocalStrorage(updatedTask);
  };

  const editTask = (id, completedValue) => {
    const updatedTask = taskList.map((task) =>
      task.id === id ? { ...task, completed: completedValue } : task
    );
    setTaskList(updatedTask);
    saveTasksToLocalStrorage(updatedTask);
  };

  const deleteTask = (id) => {
    const updatedTask = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTask);
    saveTasksToLocalStrorage(updatedTask);
  };

  const getTaskCount = () => {
    const completedTasks = taskList.filter((task) => task.completed).length;
    const uncompletedTask = taskList.length - completedTasks;
    return { completedTasks, uncompletedTask };
  };

  const { completedTasks, uncompletedTask } = getTaskCount();

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList
        taskList={taskList}
        editTask={editTask}
        deleteTask={deleteTask}
        uncompletedTask={uncompletedTask}
      />
      <Footer completedTasks={completedTasks} />
    </main>
  );
}

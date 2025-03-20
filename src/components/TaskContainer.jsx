import { useState } from "react";
import Footer from "./footer/Footer.jsx";
import Header from "./header/Header.jsx";
import TaskInput from "./taskInput/TaskInput.jsx";
import TaskList from "./TaskList/TaskList.jsx";
export default function TaskContainer() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
  };

  const editTask = (id, completedValue) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
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

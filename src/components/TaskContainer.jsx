import Footer from "./footer/Footer.jsx";
import Header from "./header/Header.jsx";
import TaskInput from "./taskInput/TaskInput.jsx";
import TaskList from "./TaskList/TaskList.jsx";

export default function TaskContainer() {
  return (
    <main>
      <Header />
      <TaskInput />
      <TaskList />
      <Footer />
    </main>
  );
}

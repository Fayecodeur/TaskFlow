import TaskItem from "../TaskItem/TaskItem.jsx";
import styles from "./taskList.module.css";
export default function TaskList() {
  return (
    <div className="box">
      <h2 className={styles.title}>Il te reste X tâches</h2>
      <ul className={styles.container}>
        <TaskItem />
      </ul>
    </div>
  );
}

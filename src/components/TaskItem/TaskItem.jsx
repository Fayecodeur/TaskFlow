import styles from "./taskItem.module.css";
import { FaTrashAlt } from "react-icons/fa";

export default function TaskItem({ task, editTask, deleteTask }) {
  return (
    <li
      onClick={() => editTask(task.id, !task.completed)}
      className={`${styles.container} ${
        task?.completed ? styles.success : styles.default
      }`}
    >
      <div className={styles.item}>
        <div
          className={`${styles.id} ${
            task?.completed ? styles.idSuccess : styles.idDefault
          }`}
        >
          {task.id}
        </div>
        <div
          className={
            task?.completed ? styles.contentSuccess : styles.contentDefault
          }
        >
          {task.title}
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Empêche la propagation de l'événement
          deleteTask(task.id);
        }}
        className="button-primary"
        style={{ outline: "none" }}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}

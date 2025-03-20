import TaskItem from "../TaskItem/TaskItem.jsx";
import styles from "./taskList.module.css";

export default function TaskList({
  taskList,
  editTask,
  deleteTask,
  uncompletedTask,
}) {
  if (taskList && taskList.length > 0) {
    return (
      <div className="box">
        <h2 className={styles.title}>
          {uncompletedTask > 0 ? (
            <>
              Il te reste <span className="important">{uncompletedTask}</span>{" "}
              tâches 🗂️
            </>
          ) : (
            "Bravo, tu as tout terminé ! 🎉"
          )}
        </h2>

        <ul className={styles.container}>
          {taskList.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="box">
      <h2 className={styles.title}>
        Rien à faire, profite de ton temps libre 😌🎉
      </h2>
    </div>
  );
}

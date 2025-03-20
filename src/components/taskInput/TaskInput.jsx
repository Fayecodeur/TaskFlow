import { useState } from "react";
import styles from "./taskInput.module.css";
import toast from "react-hot-toast";
export default function TaskInput({ addTask }) {
  const [title, setTitle] = useState("");

  const handleChangeInput = (e) => {
    setTitle(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      toast.error("Le titre de la tâche est obligatoire !");
      return;
    }
    addTask(title);
    toast.success("Nouvelle tâche ajoutée !");
    setTitle("");
  };

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajoute une tâche 📝</h2>
      <form onSubmit={handleAddTask} className={styles.container}>
        <input
          onChange={handleChangeInput}
          value={title}
          type="text"
          className={styles.input}
          placeholder="Note ta prochaine action"
        />
        <button
          type="submit"
          className="button-primary"
          style={{ outline: "none" }}
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}

import styles from "./taskInput.module.css";
export default function TaskInput() {
  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajoute ta prochaine tache</h2>
      <form className={styles.container} action="">
        <input
          type="text"
          className={styles.input}
          placeholder="Indiquer un titre de tache explicite"
        />
        <button type="submit" className="button-primary">
          Ajouter
        </button>
      </form>
    </div>
  );
}

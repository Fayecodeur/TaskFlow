import styles from "./taskItem.module.css";
export default function TaskItem() {
  return (
    <li className={`${styles.container} ${styles.default}`}>
      <div className={styles.item}>
        <div className={`${styles.id} ${styles.idDefault}`}>1</div>
        <div className={styles.contentDefault}>Finir le travail</div>
      </div>
      <button className="button-primary">x</button>
    </li>
  );
}

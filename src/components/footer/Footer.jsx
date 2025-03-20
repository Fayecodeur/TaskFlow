import styles from "./footer.module.css";
export default function Footer({ completedTasks }) {
  if (completedTasks) {
    return (
      <footer>
        <code className={styles.footer}>
          Tu a terminer {completedTasks} tache{completedTasks > 1 ? "s" : ""} ✅
        </code>
      </footer>
    );
  }
  return <></>;
}

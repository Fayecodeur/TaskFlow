import reactLogo from "../../assets/react.svg";
import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={reactLogo} alt="Logo react js" height={50} width={50} />
        <div>
          <h1>TaskFlow</h1>
          <div className="">
            <code className="color-gray">
              Éliminez le chaos, suivez le flux. ⚡
            </code>
          </div>
        </div>
      </div>
      <code className="color-primary">v.1.0</code>
    </div>
  );
}

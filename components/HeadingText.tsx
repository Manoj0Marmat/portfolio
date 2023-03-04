import styles from "./css/heading.module.css";

export function HeadingText(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{props.children}</h1>
    </div>
  );
}

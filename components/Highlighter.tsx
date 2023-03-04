import styles from "./css/highlighter.module.css";

export function Highlighter(props) {
  return <span className={styles.highlight}>{props.children}</span>;
}

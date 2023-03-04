import styles from "./css/hrlayout.module.css";

export function HorizontalLayout({ children }) {
  return <div className={styles.horizontal}>{children}</div>;
}

import styles from "./css/btn.module.css";

export function TransparentBtn({ children }) {
  return <span className={styles.transparentButton}>{children}</span>;
}

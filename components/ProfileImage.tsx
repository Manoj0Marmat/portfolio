import styles from "./css/images.module.css";

export function ImageComponent(props) {
  return (
    <div className={styles.container}>
      <div className={styles.imgwrapper}>
        <img className={styles.img} src={props.src} alt={props.alt} />
      </div>
    </div>
  );
}

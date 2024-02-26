import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loaderback}>
      <div className={styles.loader}>
        <div className={styles.jimuPrimaryLoading}></div>
      </div>
    </div>
  );
}

export default Loader;

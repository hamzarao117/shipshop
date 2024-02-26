import { useNavigate, useRouteError } from "react-router-dom";
import styles from "./Error.module.css";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className={styles.error}>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;

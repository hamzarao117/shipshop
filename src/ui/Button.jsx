import { Link } from "react-router-dom";
import styles from "./Button.module.css";

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, onClick }) {
  if (to)
    return (
      <Link to={to} className={styles.linkBtn}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles.cartBtn}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles.login}>
      {children}
    </button>
  );
}

export default Button;

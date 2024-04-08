import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, onClick }) {
  const datkTheme = useSelector((state) => state.view.darkTheme);

  if (to)
    return (
      <Link to={to} className={datkTheme ? styles.darkLinkBtn : styles.linkBtn}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={datkTheme ? styles.darkCartBtn : styles.cartBtn}
      >
        {children}
      </button>
    );

  return (
    <button
      disabled={disabled}
      className={datkTheme ? styles.darkLogin : styles.login}
    >
      {children}
    </button>
  );
}

export default Button;

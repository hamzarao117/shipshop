import { Link } from "react-router-dom";
import styles from "./Empty.module.css";
import { useSelector } from "react-redux";

function EmptyCart() {
  const darkTheme = useSelector((state) => state.view.darkTheme);

  return (
    <div className={styles.empty}>
      <Link className={darkTheme ? "darkBackBtn" : "backBtn"} to="/products">
        Back &larr;
      </Link>

      <p
        className={
          darkTheme ? "darkHeadingEmptyComponent" : "headingEmptyComponent"
        }
      >
        Your cart is still empty. Start adding some items :)
      </p>
    </div>
  );
}

export default EmptyCart;

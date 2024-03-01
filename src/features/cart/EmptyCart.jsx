import { Link } from "react-router-dom";
import styles from "./Empty.module.css";

function EmptyCart() {
  return (
    <div className={styles.empty}>
      <Link className="backBtn" to="/products">
        Back &larr;
      </Link>

      <p className="headingEmptyComponent">
        Your cart is still empty. Start adding some items :)
      </p>
    </div>
  );
}

export default EmptyCart;

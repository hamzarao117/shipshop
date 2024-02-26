import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.css";

function EmptyCart() {
  return (
    <div className={styles.emptyCart}>
      <Link className={styles.backBtn} to="/products">
        Back &larr;
      </Link>

      <p className={styles.heading}>
        Your cart is still empty. Start adding some items :)
      </p>
    </div>
  );
}

export default EmptyCart;

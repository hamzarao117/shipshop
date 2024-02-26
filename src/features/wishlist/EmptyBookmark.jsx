import styles from "../cart/EmptyCart.module.css";
import { Link } from "react-router-dom";

function EmptyBookmark() {
  return (
    <div>
      <div className={styles.emptyCart}>
        <Link className={styles.backBtn} to="/products">
          Back &larr;
        </Link>

        <p className={styles.heading}>
          Your List is still empty. Start adding some items :)
        </p>
      </div>
    </div>
  );
}

export default EmptyBookmark;

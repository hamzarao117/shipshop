import { Link } from "react-router-dom";
import styles from "../cart/Empty.module.css";

function EmptyBookmark() {
  return (
    <div>
      <div className={styles.empty}>
        <Link className="backBtn" to="/products">
          Back &larr;
        </Link>

        <p className="headingEmptyComponent">
          Your List is still empty. Start adding some items :)
        </p>
      </div>
    </div>
  );
}

export default EmptyBookmark;

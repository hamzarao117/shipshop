import { Link } from "react-router-dom";
import styles from "../cart/Empty.module.css";
import { useSelector } from "react-redux";

function EmptyBookmark() {
  const darkTheme = useSelector((state) => state.view.darkTheme);

  return (
    <div>
      <div className={styles.empty}>
        <Link className={darkTheme ? "darkBackBtn" : "backBtn"} to="/products">
          Back &larr;
        </Link>

        <p
          className={
            darkTheme ? "darkHeadingEmptyComponent" : "headingEmptyComponent"
          }
        >
          Your List is still empty. Start adding some items :)
        </p>
      </div>
    </div>
  );
}

export default EmptyBookmark;

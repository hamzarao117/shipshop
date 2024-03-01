import { useDispatch } from "react-redux";
import styles from "./DeleteItem.module.css";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

// eslint-disable-next-line react/prop-types
function UpdateItemQuantity({ id, currentQuantity, view }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.btnsQuan}>
      <button
        className={view ? styles.btnQuan : styles.btnQuanColView}
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        &minus;
      </button>
      <p className={styles.currentQuantity}>{currentQuantity}</p>
      <button
        className={view ? styles.btnQuan : styles.btnQuanColView}
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        &#43;
      </button>
    </div>
  );
}

export default UpdateItemQuantity;

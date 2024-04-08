import { useDispatch, useSelector } from "react-redux";
import styles from "./DeleteItem.module.css";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

// eslint-disable-next-line react/prop-types
function UpdateItemQuantity({ id, currentQuantity, view }) {
  const darkTheme = useSelector((state) => state.view.darkTheme);
  darkTheme;

  const dispatch = useDispatch();

  // const darkThemeStyle = { backgroundColor: "#7adc9e" };

  return (
    <div className={styles.btnsQuan}>
      <button
        className={view ? styles.btnQuan : styles.btnQuanColView}
        // style={darkTheme && { backgroundColor: "#7adc9e" }}
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        &minus;
      </button>
      <p
        className={
          darkTheme ? styles.darkCurrentQuantity : styles.currentQuantity
        }
      >
        {currentQuantity}
      </p>
      <button
        className={view ? styles.btnQuan : styles.btnQuanColView}
        // style={darkTheme && { backgroundColor: "#7adc9e" }}
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        &#43;
      </button>
    </div>
  );
}

export default UpdateItemQuantity;

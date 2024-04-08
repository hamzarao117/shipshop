/* eslint-disable no-undef */
import styles from "./DeleteItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "./cartSlice";

// eslint-disable-next-line react/prop-types
function DeleteItem({ id }) {
  const darkTheme = useSelector((state) => state.view.darkTheme);

  const dispatch = useDispatch();
  return (
    <button
      className={darkTheme ? styles.darkBtnDel : styles.btnDel}
      onClick={() => dispatch(deleteItem(id))}
    >
      Delete
    </button>
  );
}

export default DeleteItem;

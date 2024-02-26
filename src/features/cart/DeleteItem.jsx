/* eslint-disable no-undef */
import styles from "./DeleteItem.module.css";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

// eslint-disable-next-line react/prop-types
function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <button className={styles.btnDel} onClick={() => dispatch(deleteItem(id))}>
      Delete
    </button>
  );
}

export default DeleteItem;

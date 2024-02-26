/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import styles from "./CartItem.module.css";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";
// eslint-disable-next-line react/prop-types
function CartItem({ item }) {
  // eslint-disable-next-line react/prop-types
  const { id, quantity, title, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className={styles.cartItem}>
      <p className={styles.title}>
        {quantity}&times; {title.split(" ").slice(0, 5).join(" ") + "..."}
      </p>
      <div className={styles.Dev}>
        <p className={styles.totalPrice}>${totalPrice}</p>

        <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />

        <DeleteItem id={id} />
      </div>
    </li>
  );
}

export default CartItem;

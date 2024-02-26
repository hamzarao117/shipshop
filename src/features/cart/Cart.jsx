import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
// import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { clearCart, getTotalCartPrice } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className={styles.cart}>
      <Link className={styles.backBtn} to="/products">
        Back &larr;
      </Link>

      <h2 className={styles.heading}>Your cart, {username}</h2>
      <ul className={styles.cartList}>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <p className={styles.totalPrice}>Total = ${totalCartPrice}</p>

      <div className={styles.cartBtns}>
        <button className={styles.btnOrder}>Order</button>
        <button
          className={styles.btnClear}
          onClick={() => dispatch(clearCart())}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Cart;

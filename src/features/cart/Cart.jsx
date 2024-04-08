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
  const darkTheme = useSelector((state) => state.view.darkTheme);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();
  console.log(darkTheme);
  if (!cart.length) return <EmptyCart />;

  return (
    <div className={styles.cart}>
      <Link
        className={darkTheme ? styles.darkBackBtn : styles.backBtn}
        to="/products"
      >
        Back &larr;
      </Link>

      <h2 className={darkTheme ? styles.darkHeading : styles.heading}>
        Your cart, {username}
      </h2>
      <ul className={darkTheme ? styles.darkCartList : styles.cartList}>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <p className={darkTheme ? styles.darkTotalPrice : styles.totalPrice}>
        Total = ${totalCartPrice}
      </p>

      <div className={styles.cartBtns}>
        <Link
          className={darkTheme ? styles.darkBtnOrder : styles.btnOrder}
          to="/checkout"
        >
          Order
        </Link>
        <button
          className={darkTheme ? styles.darkBtnClear : styles.btnClear}
          onClick={() => dispatch(clearCart())}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Cart;

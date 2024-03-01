import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import SearchOrder from "../features/categories/SearchProduct";
import Username from "../features/user/Username";
import CartOverview from "../features/cart/CartOverview";
import ListView from "./ListView";
import Categories from "../features/categories/Categories";

// eslint-disable-next-line react/prop-types
function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to={"/"}>
        🚚ShipShop
      </Link>
      <div className={styles.search}>
        <Categories />
        <SearchOrder />
      </div>

      <div className={styles.headerDiv}>
        <CartOverview />

        <Link to="/bookmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className={styles.bookmarkList}
          >
            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
          </svg>
        </Link>
        {<ListView />}
        <Username />
      </div>
    </header>
  );
}

export default Header;

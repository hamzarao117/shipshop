/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../store/StoreItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import Button from "../../ui/Button";
import { deleteBookmark } from "./bookmarkSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function BookmarkItem({ item }) {
  // eslint-disable-next-line react/prop-types
  const { id, image, title, rating, price, description } = item;
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const darkTheme = useSelector((state) => state.view.darkTheme);
  const view = useSelector((state) => state.view.view);
  const isInCart = currentQuantity > 0;
  const navigate = useNavigate();

  function getDetails(e) {
    e.preventDefault();
    navigate(`/products/${id}`);
  }

  function handleAddToCart() {
    const newItem = {
      id,
      title,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  function handleDelBookmark() {
    dispatch(deleteBookmark(id));
  }

  const btnColor = isExpanded ? "#ef4444" : "#22c55e";
  const darkBtnColor = isExpanded ? "#f58f8f" : "#7adc9e";

  const Styles = {
    border: "none",
    backgroundColor: "transparent",
    fontSize: "14px",
    cursor: "pointer",
    paddingLeft: "3px",
    color: darkTheme ? darkBtnColor : btnColor,
  };

  if (!view)
    return (
      <li className={darkTheme ? styles.darkProductCol : styles.productCol}>
        <Link
          className={darkTheme ? styles.darkImgLink : styles.imgLink}
          onClick={getDetails}
        >
          <img src={image} alt={title} width="100px" />
        </Link>
        <div className={styles.colDetails}>
          <Link
            className={darkTheme ? styles.darkHeadingLink : styles.headingLink}
            onClick={getDetails}
          >
            {title.split(" ").slice(0, 3).join(" ") + "..."}
          </Link>
          <p className={styles.description}>
            <span>{description.split(" ").slice(0, 4).join(" ") + "..."}</span>
            {/* <button style={Styles} onClick={() => setIsExpanded((exp) => !exp)}>
            {isExpanded ? "show less" : "show more"}
          </button> */}
          </p>
        </div>
        <div className={styles.lowerDiv}>
          <div>
            <p className={darkTheme ? styles.darkRating : styles.rating}>
              {rating.rate}⭐ <span>({rating.count})</span>
            </p>
            <p
              className={
                darkTheme ? styles.darkColViewPrice : styles.colViewPrice
              }
            >
              ${price}
            </p>
          </div>

          {!isInCart ? (
            <Button onClick={handleAddToCart}>Add to cart</Button>
          ) : (
            // <DeleteItem id={id} />
            <UpdateItemQuantity
              id={id}
              currentQuantity={currentQuantity}
              view={view}
            />
          )}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className={
            darkTheme ? styles.darkColViewBookmark : styles.colViewBookmark
          }
          onClick={() => dispatch(deleteBookmark(id))}
        >
          <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
        </svg>
      </li>
    );

  return (
    <li className={darkTheme ? styles.darkProductList : styles.productList}>
      <Link
        className={darkTheme ? styles.darkImgLink : styles.imgLink}
        onClick={getDetails}
      >
        <img src={image} alt={title} width="100px" />
      </Link>
      <div className={styles.details}>
        <Link
          className={darkTheme ? styles.darkHeadingLink : styles.headingLink}
          onClick={getDetails}
        >
          {title}
        </Link>
        <p className={styles.description}>
          <span>
            {isExpanded
              ? description
              : description.split(" ").slice(0, 16).join(" ") + "..."}
          </span>
          <button style={Styles} onClick={() => setIsExpanded((exp) => !exp)}>
            {isExpanded ? "show less" : "show more"}
          </button>
        </p>
        <p className={darkTheme ? styles.darkRating : styles.rating}>
          {rating.rate}⭐ <span>( {rating.count} )</span>
        </p>
        <p className={darkTheme ? styles.darkPrice : styles.price}>${price}</p>
      </div>

      {!isInCart ? (
        <Button onClick={handleAddToCart}>Add to cart</Button>
      ) : (
        <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
      )}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className={darkTheme ? styles.darkBookmark : styles.bookmark}
        onClick={handleDelBookmark}
      >
        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
      </svg>
    </li>
  );
}

export default BookmarkItem;

/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./StoreItem.module.css";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import {
  addBookmark,
  deleteBookmark,
  getCurrentBookmarkQuantitybyId,
} from "../wishlist/bookmarkSlice";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function StoreItem({ storeItem }) {
  // eslint-disable-next-line react/prop-types
  const { id, image, title, rating, price, description } = storeItem;
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  const getCurrentBookmark = useSelector(getCurrentBookmarkQuantitybyId(id));
  const darkTheme = useSelector((state) => state.view.darkTheme);
  const isBookmarked = getCurrentBookmark !== true;
  const navigate = useNavigate();
  const view = useSelector((state) => state.view.view);

  function GetDetails(e) {
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

  function handleBookmark() {
    const newBookmarkItem = {
      id,
      image,
      title,
      rating,
      price,
      description,
      bookmark: true,
    };
    dispatch(addBookmark(newBookmarkItem));
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
          onClick={GetDetails}
        >
          <img src={image} alt={title} width="100px" />
        </Link>
        <div className={styles.colDetails}>
          <Link
            className={darkTheme ? styles.darkHeadingLink : styles.headingLink}
            onClick={GetDetails}
          >
            {title.split(" ").slice(0, 3).join(" ") + "..."}
          </Link>
          <p className={styles.description}>
            <span>{description.split(" ").slice(0, 4).join(" ") + "..."}</span>
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
        {!isBookmarked ? (
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
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className={
              darkTheme ? styles.darkColViewBookmark : styles.colViewBookmark
            }
            onClick={handleBookmark}
          >
            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
          </svg>
        )}
      </li>
    );

  return (
    <li className={darkTheme ? styles.darkProductList : styles.productList}>
      <Link
        className={darkTheme ? styles.darkImgLink : styles.imgLink}
        onClick={GetDetails}
      >
        <img src={image} alt={title} width="100px" />
      </Link>
      <div className={darkTheme ? styles.darkDetails : styles.details}>
        <Link
          className={darkTheme ? styles.darkHeadingLink : styles.headingLink}
          onClick={GetDetails}
        >
          {title}
        </Link>
        <p className={darkTheme ? styles.darkDescription : styles.description}>
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
        // <DeleteItem id={id} />
        <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
      )}
      {!isBookmarked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className={darkTheme ? styles.darkBookmark : styles.bookmark}
          onClick={() => dispatch(deleteBookmark(id))}
        >
          <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className={darkTheme ? styles.darkBookmark : styles.bookmark}
          onClick={handleBookmark}
        >
          <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
        </svg>
      )}
    </li>
  );
}

export default StoreItem;

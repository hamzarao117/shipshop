import { useLoaderData, useNavigate } from "react-router-dom";
import { getProductDetails } from "../../services/apiStore";
import styles from "./ProductDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  deleteBookmark,
  getCurrentBookmarkQuantitybyId,
} from "../wishlist/bookmarkSlice";

function ProductDetails() {
  const productDetails = useLoaderData();
  const { title, image, description, category, price, rating, id } =
    productDetails;
  const getCurrentBookmark = useSelector(getCurrentBookmarkQuantitybyId(id));
  const darkTheme = useSelector((state) => state.view.darkTheme);
  const isBookmarked = getCurrentBookmark !== true;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBack() {
    navigate("/products");
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

  return (
    <div className={darkTheme ? styles.darkProduct : styles.product}>
      <div className={styles.productHeader}>
        <button
          className={
            darkTheme ? styles.darkProductBackBtn : styles.productBackBtn
          }
          onClick={handleBack}
        >
          Back &larr;
        </button>

        <img
          src={image}
          alt={title}
          className={darkTheme ? styles.darkProductImg : styles.productImg}
        />
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
      </div>
      <div className={styles.productDetails}>
        <div>
          <h1
            className={
              darkTheme ? styles.darkProductHeading : styles.productHeading
            }
          >
            {title}
          </h1>
          <span
            className={
              darkTheme ? styles.darkProductCategory : styles.productCategory
            }
          >
            {category}
          </span>
        </div>
        <p
          className={
            darkTheme
              ? styles.darkProductDescription
              : styles.productDescription
          }
        >
          {description}
        </p>
        <p
          className={darkTheme ? styles.darkProductPrice : styles.productPrice}
        >
          ${price}
        </p>
        <p className={darkTheme ? styles.darkProductRate : styles.productRate}>
          {rating.rate}⭐ ({rating.count})
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const product = await getProductDetails(params.productId);
  console.log(product);
  return product;
}

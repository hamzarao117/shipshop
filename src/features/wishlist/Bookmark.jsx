/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from "react-redux";
import EmptyBookmark from "./EmptyBookmark";
import BookmarkItem from "./BookmarkItem";
import styles from "./Bookmark.module.css";
import { Link } from "react-router-dom";
import { clearBookmark } from "./bookmarkSlice";

function BookmarkList() {
  const bookmark = useSelector((state) => state.bookmark.bookmarkList);
  const username = useSelector((state) => state.user.username);
  const view = useSelector((state) => state.view.view);
  if (!bookmark.length) return <EmptyBookmark />;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link className="backBtn" to="/products">
          Back &larr;
        </Link>
        <h1 className={styles.heading}>Your Wishlist, {username}</h1>
      </div>

      <ul className={view ? styles.list : styles.column}>
        {bookmark.map((item) => (
          <BookmarkItem item={item} key={item.key} />
        ))}
      </ul>

      <buttons
        className={styles.btnClear}
        onClick={() => dispatch(clearBookmark())}
      >
        Clear
      </buttons>
    </div>
  );
}

export default BookmarkList;

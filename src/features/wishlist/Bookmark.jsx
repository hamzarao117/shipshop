/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import EmptyBookmark from "./EmptyBookmark";
import BookmarkItem from "./BookmarkItem";

function BookmarkList() {
  const bookmark = useSelector((state) => state.bookmark.bookmark);

  if (!BookmarkList.length) return <EmptyBookmark />;

  return (
    <ul>
      {bookmark.map((item) => (
        <BookmarkItem item={item} key={item.key} />
      ))}
    </ul>
  );
}

export default BookmarkList;

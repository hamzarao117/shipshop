import { useState } from "react";
import styles from "./SearchProduct.module.css";
// import { useDispatch, useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function SearchOrder() {
  // const search = useSelector((state) => state.search.search);
  // const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Products..."
      />
    </form>
  );
}

export default SearchOrder;

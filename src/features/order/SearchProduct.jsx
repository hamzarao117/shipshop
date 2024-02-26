import styles from "./SearchProduct.module.css";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
function SearchOrder({ query, setQuery }) {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(query);
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

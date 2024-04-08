import { useState } from "react";
import styles from "./SearchProduct.module.css";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function SearchOrder() {
  const darkTheme = useSelector((state) => state.view.darkTheme);
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={darkTheme ? styles.darkInput : styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Products..."
      />
    </form>
  );
}

export default SearchOrder;

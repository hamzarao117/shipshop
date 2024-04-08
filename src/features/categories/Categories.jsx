/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from "react-redux";
import styles from "./Categories.module.css";
import { searchCategory } from "./searchSlice";

function Categories() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.search.category);
  const darkTheme = useSelector((state) => state.view.darkTheme);

  return (
    <select
      className={darkTheme ? styles.darkSelectContainer : styles.selectContainer}
      value={category}
      onChange={(e) => {
        dispatch(searchCategory(e.target.value));
      }}
    >
      <option value="">All</option>
      <option value="electronics">electronics</option>
      <option value="jewelery">jewelery</option>
      <option value="men's clothing">men's clothing</option>
      <option value="women's clothing">women's clothing</option>
    </select>
  );
}

export default Categories;

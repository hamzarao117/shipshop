import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiStore";
import StoreItem from "./StoreItem";
import { useSelector } from "react-redux";
import styles from "./Store.module.css";

function Store() {
  const view = useSelector((state) => state.view.view);
  const category = useSelector((state) => state.search.category);
  const store = useLoaderData();
  1;
  const data = store.filter((x) => x.category === category) || "";
  console.log(data);

  return (
    <ul className={view ? styles.list : styles.column}>
      {data?.map((storeItem) => (
        <StoreItem storeItem={storeItem} key={storeItem.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const store = await getProducts();
  return store;
}

export default Store;
